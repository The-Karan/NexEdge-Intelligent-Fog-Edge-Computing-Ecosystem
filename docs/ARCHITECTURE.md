# Architecture

NimbusMesh uses a static Vite frontend with local-storage demo persistence. Components share one design system and route state.

| Layer | Responsibility | Demo implementation |
|---|---|---|
| Edge | acquisition, basic validation, immediate response | browser event injection and supported circuit simulation |
| Fog | aggregation, authorization, offline queue | deterministic local decision/event log |
| Cloud | historical storage, reporting, fleet view | browser report archive; replace with database/API in production |

Production integrations should authenticate device gateways, validate schemas, rate-limit uploads, hash credentials, encrypt traffic, and put clinical/image analysis behind suitably governed services.
