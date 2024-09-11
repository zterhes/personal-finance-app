import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import AuthenticatedLayout from "./layouts/authenticated-layout";
import ContactPage from "./routes/Contact";
import SignInPage from "./routes/Sign-in";
import SignUpPage from "./routes/Sign-up";
import DashboardPage from "./routes/Dashboard";
import { AuthenticationLayout } from "./layouts/authentication-layout";
import Transactions from "./routes/Transactions";
import Budgets from "./routes/Budgets";
import Pots from "./routes/Pots";
import RecurringBills from "./routes/RecurringBills";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AuthenticatedLayout />,
        path: "/",
        children: [{ index: true, element: <DashboardPage /> }],
      },
      {
        element: <AuthenticatedLayout />,
        children: [{ path: "/transactions", element: <Transactions /> }],
      },
      {
        element: <AuthenticatedLayout />,
        children: [{ path: "/budgets", element: <Budgets /> }],
      },
      {
        element: <AuthenticatedLayout />,
        children: [{ path: "/pots", element: <Pots /> }],
      },
      {
        element: <AuthenticatedLayout />,
        children: [{ path: "/recurring-bills", element: <RecurringBills /> }],
      },

      {
        path: "/sign-in/*",
        element: <AuthenticationLayout />,
        children: [{ index: true, element: <SignInPage /> }],
      },
      {
        path: "sign-up/*",
        element: <AuthenticationLayout />,
        children: [{ index: true, element: <SignUpPage /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
