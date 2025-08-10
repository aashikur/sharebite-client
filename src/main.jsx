import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import mainRoutes from "./Routers/mainRoutes";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={mainRoutes} />
      </AuthProvider>
    </QueryClientProvider>
);