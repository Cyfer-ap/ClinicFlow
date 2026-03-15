export type LogLevel = "debug" | "info" | "warn" | "error";

export function log(level: LogLevel, message: string, metadata?: Record<string, unknown>) {
  // Replace with a structured logger provider when observability is enabled.
  console[level](message, metadata ?? {});
}

