import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import SignUp from "./pages/Auth/signUp/SignUp";
import SignIn from "./pages/Auth/signIn/SignIn";
import ForgotPassword from "./pages/Auth/forgotPassword/ForgotPassword";
import EmailVerify from "./pages/Auth/emailVerify/EmailVerify";
import RegisterSuccess from "./pages/Auth/registerSuccess/RegisterSuccess";
import MsgSentSuccess from "./pages/Auth/msgSentSuccess/MsgSentSuccess";
import ResetPassword from "./pages/Auth/resetPassword/ResetPassword";
import ResetPassDone from "./pages/Auth/resetPassDone/ResetPassDone";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AlreadySigninRoute from "./components/auth/AlreadySigninRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectedRoute>
          <TransactionPage />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectedRoute>
          <Support />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySigninRoute>
          <SignIn />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
          <SignUp />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <AlreadySigninRoute>
          <ForgotPassword />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/register-email-verify/:email",
      element: (
        <AlreadySigninRoute>
          <EmailVerify />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySigninRoute>
          <RegisterSuccess />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/msg-sent-successfully/:email",
      element: (
        <AlreadySigninRoute>
          <MsgSentSuccess />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySigninRoute>
          <ResetPassword />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/reset-pass-done",
      element: (
        <AlreadySigninRoute>
          <ResetPassDone />,
        </AlreadySigninRoute>
      ),
    },
  ]);
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
