import { createBrowserRouter } from "react-router";

// Auth Pages
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

// App Pages
import HomePage from "../pages/HomePage";
import ArchivedPage from "../pages/ArchivedPage";
import TaggedPage from "../pages/TaggedPage";
import SearchPage from "../pages/SearchPage";

import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  // Public routes
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },

  // Protected Routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/archived",
    element: (
      <ProtectedRoute>
        <ArchivedPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tagged/:tag",
    element: (
      <ProtectedRoute>
        <TaggedPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/search",
    element: (
      <ProtectedRoute>
        <SearchPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
