import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import CreateEmployee from "./routes/CreateEmployee";
import Edit from "./routes/Edit";
import Root from "./routes/Root";

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "create/",
        element: <CreateEmployee />,
    },
    {
        path: "edit/:id",
        element: <Edit />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.Fragment>
        <QueryClientProvider client={queryClient}>
            <App />
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.Fragment>
);
