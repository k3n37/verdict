# Testing Strategy

The goal is not maximum test count. The goal is confidence per layer.

## Layers

- Unit tests for core logic and invariants
- Integration tests for storage, queues, and service modules
- Contract tests for API boundaries
- End-to-end tests for critical user paths

## Quality gates

- Fail builds on broken contracts
- Treat flaky E2E paths as platform debt
- Require coverage on safety-critical modules
