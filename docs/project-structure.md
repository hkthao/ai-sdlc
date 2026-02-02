# Project Structure

## Frontend (`src/todo-app/`)

```
src/todo-app/
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── vitest.config.ts # New: Vitest configuration
├── public/
├── src/
│   ├── main.ts
│   ├── App.vue
│   ├── style.css
│   ├── assets/
│   └── components/
│       ├── TodoForm.vue
│       ├── TodoItem.vue
│       └── TodoList.vue
└── .vscode/ # Optional, can be ignored in .gitignore
    └── extensions.json
```

## Testing (`tests/`)

```
tests/
├── unit/           # Unit tests for individual logic units, composables, functions
│   └── frontend/   # Frontend-specific unit tests (e.g., Vue components)
│       └── components/
│           └── TodoForm.test.ts # Example: Unit test for TodoForm component
├── integration/    # Integration tests for interactions between components/modules
│   └── frontend/
│       └── ...
├── e2e/            # End-to-end tests for user flows (e.g., Playwright)
└── ...             # Other test categories (if any)
```

## Rules:

-   All UI components go into `src/todo-app/src/components/`.
-   No business logic in `src/todo-app/src/App.vue`.
-   No nested components folders unless specified.
-   Frontend unit tests for `src/todo-app` should be placed under `tests/unit/frontend/`.
-   Test files should follow the pattern `*.test.ts` or `*.spec.ts`.