# AI-Driven SDLC Repository

This repository serves as a template for projects utilizing an AI-driven Software Development Life Cycle (SDLC) workflow. The core idea is to automate various stages of development and testing using specialized AI agents.

## How it Works (High-Level):

1.  **Issue Creation:** Human stakeholders (Product Owners) define features or bug fixes by creating detailed GitHub Issues with clear Acceptance Criteria.
2.  **AI Development:** An AI Developer agent reads these Issues, implements the required features, and proposes changes via Pull Requests (PRs).
3.  **AI Testing & Validation:** An AI Tester agent then reviews the PR, writes comprehensive tests based on the Acceptance Criteria, and validates the implementation. This agent also provides feedback and ensures quality before the changes are merged.

This workflow aims to streamline development, enhance quality through automated testing, and allow human oversight at critical junctures.

For a detailed explanation of the workflow, roles, and AI agent prompts, please refer to the `docs/` and `gemini/` directories.