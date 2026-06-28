# Star

> ⚠️ **Unfinished hobby project.** Star was an experiment that never reached completion. The code is shared as-is — expect rough edges, hardcoded values, and missing features.

Star is a React frontend for an **NFT marketplace built on [Stellar](https://www.stellar.org/)**. The goal was a web app where users could sign up, sign in, and eventually browse and trade NFTs, with authentication backed by Firebase and a JSON-RPC backend service.

## Status

What currently works:

- ✅ User **sign in / sign out** via Firebase Authentication
- ✅ User **sign up** (Firebase + backend `signUp` call)
- ✅ Client-side routing with public/protected routes
- ✅ A placeholder **dashboard** on the home page (Material-UI template)

What was never finished:

- ❌ The actual NFT marketplace (listings, browsing, trading)
- ❌ Stellar integration
- ❌ A deployed/configurable backend (the API points at `http://localhost:5000`)
- ❌ Tests and production configuration

## Tech stack

- **React 16** + **TypeScript**, bootstrapped with [Create React App](https://create-react-app.dev/) (`react-scripts`)
- **Material-UI v4** for components and styling
- **Firebase / FirebaseUI** for authentication
- **React Router v5** for routing
- A small **JSON-RPC** client (`src/utility/jsonRPCRequestClient.ts`) for talking to the backend
- React Context for sharing Firebase and user state

## Project structure

```
src/
├── index.tsx                       # App entry point
├── api/
│   ├── entities/user.ts            # User entity type
│   └── services/authentication.ts  # Login / SignUp service calls (JSON-RPC)
├── context/
│   ├── firebaseContext.tsx         # Firebase init + sign in/up/out helpers
│   └── userContext.tsx             # Shared user state
├── routes/
│   ├── routes.ts                   # Route definitions (public vs. protected)
│   └── AppRouter.tsx               # Router setup
├── pages/
│   ├── home/Home.tsx               # Dashboard / home page
│   ├── signIn/signIn.tsx
│   └── signUp/signUp.tsx
└── utility/
    └── jsonRPCRequestClient.ts     # Generic JSON-RPC request helper
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/)
- A Firebase project (for authentication)
- The companion backend running on `http://localhost:5000` (not included in this repo)

### Install & run

```sh
yarn install
yarn start
```

This runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command       | Description                              |
| ------------- | ---------------------------------------- |
| `yarn start`  | Run the app in development mode          |
| `yarn build`  | Build a production bundle into `build/`  |
| `yarn test`   | Run tests in watch mode                  |
| `yarn eject`  | Eject from Create React App (irreversible) |

## Configuration notes

A few things are hardcoded and would need to be addressed before any real use:

- **Firebase config** lives inline in `src/context/firebaseContext.tsx` and should be moved to environment variables.
- **Backend URLs** in `src/api/services/authentication.ts` are hardcoded to `http://localhost:5000` and should be environment-driven.
- The access token is not yet attached to outgoing requests (see the `Todo` in `jsonRPCRequestClient.ts`).

## License

No license specified — treat as all rights reserved unless the owner states otherwise.
