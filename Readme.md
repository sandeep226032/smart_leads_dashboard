smart-leads-dashboard/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts        ← MongoDB connection
│   │   │   ├── env.ts             ← validated env vars
│   │   │   └── constants.ts       ← app-wide constants
│   │   │
│   │   ├── modules/               ← feature-based structure
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.validation.ts
│   │   │   │   └── auth.types.ts
│   │   │   │
│   │   │   └── leads/
│   │   │       ├── lead.controller.ts
│   │   │       ├── lead.service.ts
│   │   │       ├── lead.repository.ts
│   │   │       ├── lead.routes.ts
│   │   │       ├── lead.validation.ts
│   │   │       ├── lead.model.ts
│   │   │       └── lead.types.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts  ← JWT verification
│   │   │   ├── rbac.middleware.ts  ← role based access
│   │   │   ├── error.middleware.ts ← global error handler
│   │   │   ├── validate.middleware.ts ← request validation
│   │   │   └── rateLimit.middleware.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── types/
│   │   │   │   ├── express.d.ts   ← extend Express types
│   │   │   │   └── common.types.ts
│   │   │   ├── utils/
│   │   │   │   ├── ApiResponse.ts ← standard response shape
│   │   │   │   ├── ApiError.ts    ← custom error class
│   │   │   │   └── csvExport.ts   ← CSV generation
│   │   │   └── enums/
│   │   │       └── index.ts       ← LeadStatus, LeadSource etc
│   │   │
│   │   └── app.ts                 ← Express app setup
│   │
│   ├── main.ts                    ← entry point
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                ← reusable base components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Table.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Spinner.tsx
│   │   │   │   └── EmptyState.tsx
│   │   │   │
│   │   │   └── leads/             ← feature components
│   │   │       ├── LeadTable.tsx
│   │   │       ├── LeadForm.tsx
│   │   │       ├── LeadFilters.tsx
│   │   │       └── LeadCard.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── DashboardPage.tsx
│   │   │
│   │   ├── hooks/                 ← custom React hooks
│   │   │   ├── useLeads.ts
│   │   │   ├── useAuth.ts
│   │   │   ├── useDebounce.ts
│   │   │   └── usePagination.ts
│   │   │
│   │   ├── services/              ← API call layer
│   │   │   ├── api.ts             ← axios instance
│   │   │   ├── auth.service.ts
│   │   │   └── leads.service.ts
│   │   │
│   │   ├── store/                 ← state management
│   │   │   ├── authSlice.ts
│   │   │   ├── leadsSlice.ts
│   │   │   └── store.ts
│   │   │
│   │   ├── types/                 ← shared TypeScript types
│   │   │   ├── lead.types.ts
│   │   │   └── auth.types.ts
│   │   │
│   │   ├── utils/
│   │   │   └── formatters.ts
│   │   │
│   │   └── router/
│   │       ├── AppRouter.tsx
│   │       └── ProtectedRoute.tsx
│   │
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .env.example
└── README.md