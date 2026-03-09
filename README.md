# ClinicFlow Token

Step 1 bootstrap for a scalable Next.js + Tailwind clinic operations product.

## Included in this step

- Scalable folder skeleton for future modules
- One modern landing page with exactly two CTAs: `Login` and `Sign Up`
- No auth, backend, business logic, dashboards, or additional routes

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Code quality and automation

- Format all files: `npm run format`
- Check formatting only: `npm run format:check`
- Lint: `npm run lint`
- Type-check: `npm run typecheck`
- Test placeholder: `npm run test`

Husky is configured with a pre-commit hook in `.husky/pre-commit` to run Prettier on staged files before every commit.

GitHub Actions workflow is available at `.github/workflows/ci.yml` and runs formatting checks, linting, type checks, build, and tests on push/PR.
