# API design

The standalone demo has no network API; it runs locally. A production adapter can implement the following consistent JSON groups:

`/api/healthcare/sensors`, `/api/healthcare/analyze`, `/api/soil/sensors`, `/api/soil/analyze`, `/api/security/access`, `/api/security/credentials`, `/api/devices`, `/api/sensors`, `/api/simulations`, `/api/reports`, `/api/analytics`.

Use `{ "data": ..., "meta": { "source": "gateway|simulation", "timestamp": "ISO-8601" } }` for success and `{ "error": { "code": "VALIDATION_ERROR", "message": "..." } }` for failures. Validate payloads server-side, apply authentication/roles, and never include API secrets in client code.
