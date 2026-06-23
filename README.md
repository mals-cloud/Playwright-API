# Playwright API — reqres.in API Test Automation

API test automation suite built with **Playwright (TypeScript)** against the [reqres.in](https://reqres.in) mock REST API, covering CRUD operations on Users, with secure API key management and externalised test data.

## Target API

**[https://reqres.in](https://reqres.in)** — a hosted REST API used for practice and prototyping. Note: it's a **mock API** — `POST`/`PUT`/`PATCH`/`DELETE` requests return realistic success responses (status codes, generated `id`, `createdAt`/`updatedAt` timestamps), but nothing is actually persisted. A subsequent `GET` will always return the same static, pre-seeded dataset, regardless of what was created/updated/deleted earlier in the run.

## Tech Stack

| Layer | Tool |
|---|---|
| Test framework | Playwright (TypeScript) — `request` fixture |
| Secrets management | `.env` + `dotenv` |
| Type definitions | `@types/node` (via `tsconfig.json`) |
| Test data | External JSON fixtures (`testdata/`) |
| Reporting | Playwright HTML report |

## Project Structure

```
Playwright API/
├── .github/                              # CI workflow config
├── node_modules/
├── playwright-report/                    # HTML report output
├── test-results/
├── testdata/
│   └── reqres_createnewuser.json         # External payload for POST/PUT tests
├── tests/
│   └── API/
│       ├── ReqRes_Test_GET_All_Users.spec.ts
│       └── ReqRes_Test_POST_Particular_User.spec.ts
├── .env                                  # API key (gitignored — not committed)
├── .gitignore
├── playwright.config.ts                  # baseURL: https://reqres.in
├── tsconfig.json                         # includes "types": ["node"]
├── package.json
└── package-lock.json
```

## Setup

```bash
npm install
npx playwright install
```

### Configure your API key

Create a `.env` file in the project root (this file is gitignored and must never be committed):

```
REQRES_API_KEY=your_reqres_api_key_here
```

The key is loaded via `dotenv` in `playwright.config.ts` and read in tests through `process.env.REQRES_API_KEY`, rather than being hardcoded in any spec file.

## Configuration

`playwright.config.ts` sets a shared `baseURL` so tests reference relative endpoints only (e.g. `/api/users`) instead of repeating the full domain in every test:

```typescript
use: {
  baseURL: 'https://reqres.in',
}
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific spec
npx playwright test tests/API/ReqRes_Test_GET_All_Users.spec.ts

# Run with the HTML report
npx playwright show-report
```

Tests can also be run directly from VS Code via the **Playwright Test for VSCode** extension — using the gutter ▶ icon next to each `test(...)` block, or the Testing sidebar (flask icon).

## Endpoints Covered / Planned

| Method | Endpoint | Test |
|---|---|---|
| `GET` | `/api/users?page=1` | List all users — `ReqRes_Test_GET_All_Users.spec.ts` |
| `POST` | `/api/users` | Create a particular user — `ReqRes_Test_POST_Particular_User.spec.ts` |
| `GET` | `/api/users/{id}` | Get single user *(planned)* |
| `PUT` / `PATCH` | `/api/users/{id}` | Update user *(planned)* |
| `DELETE` | `/api/users/{id}` | Delete user *(planned)* |
| `POST` | `/api/register` | Register (valid / invalid) *(planned)* |
| `POST` | `/api/login` | Login (valid / invalid) *(planned)* |

## Test Data

Request payloads are externalised to `testdata/reqres_createnewuser.json` rather than hardcoded inline, keeping test logic separate from test data and making payloads easy to reuse or update across multiple specs.

## Key Practices Followed

- **Status code assertions** on every request (e.g. `expect(response.status()).toBe(201)`)
- **Response body assertions** validating actual field values, not just key presence
- **No secrets in source control** — API key loaded from `.env`, file is gitignored
- **Relative endpoints** via a shared `baseURL` in `playwright.config.ts`
- **Externalised test data** for maintainability

## Author

**Malathi Subburathinam**
Senior SDET | QA Automation Engineer
[GitHub](https://github.com/mals-cloud) · [LinkedIn](https://linkedin.com/in/malathi-subburathinam)
