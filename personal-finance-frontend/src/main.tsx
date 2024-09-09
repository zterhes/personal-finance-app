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

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AuthenticatedLayout />,
        path: "/",
        children: [{ index: true, element: <DashboardPage /> }],
      },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/sign-in/*",
        element: <AuthenticationLayout />,
        children: [{ index: true, element: <SignInPage /> }],
      },
      { path: "/sign-up/*", element: <SignUpPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
