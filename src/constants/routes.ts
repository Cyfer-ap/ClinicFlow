export const PUBLIC_ROUTES = ["/", "/login", "/signup", "/forgot-password", "/reset-password"] as const;

export const ROLE_HOME_ROUTE: Record<string, string> = {
  admin: "/admin",
  doctor: "/doctor",
  receptionist: "/receptionist",
  patient: "/patient",
};

