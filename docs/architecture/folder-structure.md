# ClinicFlow Folder Architecture

This document describes the baseline folder layout for a secure, modular SaaS application.

## Design goals
- Feature-first modularity
- Clear split between routes, domain logic, and shared code
- Supabase-friendly auth/db/storage integration
- RBAC-ready middleware + guards
- Easy onboarding for tests, logs, and observability

