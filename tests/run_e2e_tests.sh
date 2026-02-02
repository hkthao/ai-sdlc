#!/bin/bash

# Start the dev server in the background
(cd .. && npm run dev --prefix src/todo-app) &
SERVER_PID=$!

echo "Waiting for the server to be ready at http://localhost:5173..."
sleep 5 # Give the server a moment to truly start before wait-on begins checking
./node_modules/.bin/wait-on http://localhost:5173 --timeout 30000 # Wait for up to 30 seconds

if [ $? -ne 0 ]; then
    echo "Server did not become ready. Exiting."
    kill $SERVER_PID
    exit 1
fi

echo "Server is ready. Running Playwright tests..."
npx playwright test -c playwright.config.ts

TEST_EXIT_CODE=$?

echo "Killing the dev server (PID: $SERVER_PID)..."
kill $SERVER_PID

exit $TEST_EXIT_CODE
