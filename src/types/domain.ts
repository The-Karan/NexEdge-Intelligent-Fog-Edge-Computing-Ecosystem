/** Domain contracts for the incremental JavaScript-to-TypeScript migration. */
export type DataOrigin = 'Manual entry' | 'Simulated sensor stream' | 'Dataset import' | 'Hardware gateway';

export interface Assessment {
  field: string;
  label: string;
  value: number;
  unit: string;
  status: 'Low' | 'Normal' | 'High';
  reference: string;
  source: DataOrigin | string;
}

export interface SensorRecord {
  id: string;
  created: string;
  source: DataOrigin | string;
  data: Record<string, string | number>;
  analysis: Assessment[];
}

export interface Credential {
  id: string;
  owner: string;
  permission: string;
  validUntil: string;
  enabled: boolean;
}

export interface SecurityEvent {
  time: string;
  id: string;
  owner: string;
  decision: string;
  reason: string;
}

export interface CircuitComponent { id: string; name: string }
export interface PinConnection { from: string; to: string }
export interface CircuitDesign {
  name: string;
  version: number;
  components: CircuitComponent[];
  connections: PinConnection[];
  logs: string[];
  readings: Array<{ time: string; sensor: string; value: string }>;
}

export interface StoredReport { kind: string; date: string; html: string }
