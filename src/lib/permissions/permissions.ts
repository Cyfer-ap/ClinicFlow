import type { Role } from "@/constants/roles";

export type Permission =
  | "view:dashboard"
  | "manage:patients"
  | "manage:appointments"
  | "manage:queue"
  | "manage:followups"
  | "manage:clinic"
  | "manage:staff"
  | "manage:settings"
  | "view:audit";

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  admin: [
    "view:dashboard",
    "manage:patients",
    "manage:appointments",
    "manage:queue",
    "manage:followups",
    "manage:clinic",
    "manage:staff",
    "manage:settings",
    "view:audit",
  ],
  doctor: ["view:dashboard", "manage:appointments", "manage:followups", "manage:patients"],
  receptionist: ["view:dashboard", "manage:patients", "manage:appointments", "manage:queue"],
  patient: ["view:dashboard"],
};

