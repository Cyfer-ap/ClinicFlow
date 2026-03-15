import type { Role } from "@/constants/roles";

export function canAccessRoute(_role: Role, _pathname: string) {
  // Route-level logic belongs here once route matrix is finalized.
  return true;
}

