# Edge and Fog workflow

1. A real gateway or the demo injector produces a timestamped sensor/event payload.
2. The edge layer checks shape/range and can filter noisy or duplicated data.
3. The fog layer aggregates readings, evaluates access policy, logs locally, and queues during an outage.
4. When connectivity is available, summarized events synchronize to cloud storage.
5. The cloud layer supports historical analytics, reporting, device management, and model distribution.

The architecture screen labels all illustrative timing and transfer figures as simulated.
