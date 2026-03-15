export const ROLES = ["patient", "admin", "doctor", "receptionist"] as const;
export type Role = (typeof ROLES)[number];

