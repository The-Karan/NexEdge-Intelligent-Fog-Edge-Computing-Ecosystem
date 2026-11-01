/** Typed browser storage adapter. It retains existing `nx-*` keys and JSON formats. */
export function readStored<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : (JSON.parse(value) as T);
  } catch {
    return fallback;
  }
}

export function writeStored<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
