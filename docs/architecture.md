# Architecture Overview

This is a simple frontend-only application.

Architecture principles:
- Component-based
- Unidirectional data flow
- No global mutable state

High-level flow:
User Action → Component State → UI Render

Non-goals:
- No authentication
- No persistence
- No server-side logic
