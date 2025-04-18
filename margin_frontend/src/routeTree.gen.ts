/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as TradeImport } from './routes/trade';
import { Route as SignUpImport } from './routes/sign-up';
import { Route as PoolImport } from './routes/pool';
import { Route as LoginImport } from './routes/login';
import { Route as ChangePasswordImport } from './routes/change-password';
import { Route as IndexImport } from './routes/index';

// Create/Update Routes

const TradeRoute = TradeImport.update({
  id: '/trade',
  path: '/trade',
  getParentRoute: () => rootRoute,
} as any);

const SignUpRoute = SignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any);

const PoolRoute = PoolImport.update({
  id: '/pool',
  path: '/pool',
  getParentRoute: () => rootRoute,
} as any);

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any);

const ChangePasswordRoute = ChangePasswordImport.update({
  id: '/change-password',
  path: '/change-password',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/change-password': {
      id: '/change-password';
      path: '/change-password';
      fullPath: '/change-password';
      preLoaderRoute: typeof ChangePasswordImport;
      parentRoute: typeof rootRoute;
    };
    '/login': {
      id: '/login';
      path: '/login';
      fullPath: '/login';
      preLoaderRoute: typeof LoginImport;
      parentRoute: typeof rootRoute;
    };
    '/pool': {
      id: '/pool';
      path: '/pool';
      fullPath: '/pool';
      preLoaderRoute: typeof PoolImport;
      parentRoute: typeof rootRoute;
    };
    '/sign-up': {
      id: '/sign-up';
      path: '/sign-up';
      fullPath: '/sign-up';
      preLoaderRoute: typeof SignUpImport;
      parentRoute: typeof rootRoute;
    };
    '/trade': {
      id: '/trade';
      path: '/trade';
      fullPath: '/trade';
      preLoaderRoute: typeof TradeImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/change-password': typeof ChangePasswordRoute;
  '/login': typeof LoginRoute;
  '/pool': typeof PoolRoute;
  '/sign-up': typeof SignUpRoute;
  '/trade': typeof TradeRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/change-password': typeof ChangePasswordRoute;
  '/login': typeof LoginRoute;
  '/pool': typeof PoolRoute;
  '/sign-up': typeof SignUpRoute;
  '/trade': typeof TradeRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/change-password': typeof ChangePasswordRoute;
  '/login': typeof LoginRoute;
  '/pool': typeof PoolRoute;
  '/sign-up': typeof SignUpRoute;
  '/trade': typeof TradeRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | '/'
    | '/change-password'
    | '/login'
    | '/sign-up'
    | '/pool'
    | '/trade';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/change-password' | '/login' | '/sign-up' | '/pool' | '/trade';
  id:
    | '__root__'
    | '/'
    | '/change-password'
    | '/login'
    | '/sign-up'
    | '/pool'
    | '/trade';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  ChangePasswordRoute: typeof ChangePasswordRoute;
  LoginRoute: typeof LoginRoute;
  PoolRoute: typeof PoolRoute;
  SignUpRoute: typeof SignUpRoute;
  TradeRoute: typeof TradeRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ChangePasswordRoute: ChangePasswordRoute,
  LoginRoute: LoginRoute,
  PoolRoute: PoolRoute,
  SignUpRoute: SignUpRoute,
  TradeRoute: TradeRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/change-password",
        "/login",
        "/pool",
        "/sign-up",
        "/trade"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/change-password": {
      "filePath": "change-password.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/pool": {
      "filePath": "pool.tsx"
    },
    "/sign-up": {
      "filePath": "sign-up.tsx"
    },
    "/trade": {
      "filePath": "trade.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
