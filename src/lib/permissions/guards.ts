import type { Role } from "@/constants/roles";
import type { Permission } from "@/lib/permissions/permissions";
import { ROLE_PERMISSIONS } from "@/lib/permissions/permissions";

export function hasPermission(role: Role, permission: Permission) {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

