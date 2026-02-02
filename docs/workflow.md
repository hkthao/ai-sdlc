# AI-Driven Development Workflow

This document outlines the end-to-end workflow for developing features using AI agents within this repository.

## Workflow Steps:

1.  **Human (Product Owner) Creates Issue:**
    *   A human stakeholder (Product Owner) identifies a new feature or bug fix.
    *   They create a detailed GitHub Issue using the provided templates (e.g., `feature.yml`).
    *   The Issue *must* include clear "Acceptance Criteria" that are measurable and testable.

2.  **AI DEV Agent Implements Feature:**
    *   An AI Developer agent picks up an open Issue.
    *   The AI DEV agent reads the Issue and implements the feature or fix according to the "Expected Solution" and "Acceptance Criteria".
    *   The AI DEV agent creates a Pull Request (PR) with the implemented code.
    *   **Important:** The AI DEV agent does NOT write tests. Its sole focus is on implementing the production code.

3.  **AI TEST Agent Writes Tests and Reviews:**
    *   An AI Tester agent is triggered by the new Pull Request.
    *   The AI TEST agent reads the original GitHub Issue (especially the "Acceptance Criteria") and the code changes in the PR.
    *   The AI TEST agent writes new unit, integration, or end-to-end tests to validate the implemented feature against the "Acceptance Criteria" and to cover edge cases.
    *   The AI TEST agent reviews the AI DEV agent's code for quality, adherence to standards, and potential issues, providing feedback via PR comments.
    *   The AI TEST agent may propose additional code changes (e.g., test files, minor fixes suggested by tests) via the PR.

4.  **Feedback Loop until Pass:**
    *   If tests fail or the AI TEST agent provides feedback, the AI DEV agent iterates on the implementation.
    *   This cycle continues until all Acceptance Criteria are met, tests pass, and the AI TEST agent approves the PR.
    *   Once approved, the PR can be merged, and the feature is considered complete.