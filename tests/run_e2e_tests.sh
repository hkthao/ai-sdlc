#!/bin/bash

# Start the dev server in the background
(cd src/todo-app && npm install && npm run dev) &
SERVER_PID=$!

echo "Waiting for the server to be ready at http://localhost:5173..."
sleep 5 # Give the server a moment to truly start before wait-on begins checking
./node_modules/.bin/wait-on http://localhost:5173 --timeout 30000 # Wait for up to 30 seconds

if [ $? -ne 0 ]; then
    echo "Server did not become ready. Exiting."
    kill $SERVER_PID
    exit 1
fi

echo "Server is ready. Installing Playwright dependencies and running tests..."
# Change to the tests directory, install dependencies, and then run playwright tests
(cd tests && npm install && npx playwright test -c playwright.config.ts)
TEST_EXIT_CODE=$?

echo "Killing the dev server (PID: $SERVER_PID)..."
kill $SERVER_PID

exit $TEST_EXIT_CODE
