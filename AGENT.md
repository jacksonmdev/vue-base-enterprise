# AGENT.md

## Project Automation Agent Rules

This file defines automation rules and conventions for working with the `vue-base-enterprise` project.

### Rule 2: Build and Error Check After Code Changes

**Whenever code changes are made:**

- The agent will automatically run `npm run build:prod`.
- If there are build or lint errors, the agent will resolve them until the build succeeds with no errors.

### Rule 1: "implement" Command (Generic)

**When you say:**

> implement

**The agent will automatically:**

- Execute all steps generated through sequential thinking for the current task or feature, regardless of the topic (e.g., Capacitor integration, new features, refactoring, etc.).
- This means the agent will analyze, plan, and perform each step in sequence, automating the process end-to-end.

_Example:_
If the sequential thinking process generates a list of steps for integrating a library, refactoring code, or adding a feature, the agent will execute each step in order until the task is complete.

---

> Add more rules below as your workflow evolves.
