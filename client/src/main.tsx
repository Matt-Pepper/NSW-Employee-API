import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeContainer from "./containers/EmployeeContainer/EmployeeContainer";
import "./index.css";
import CreateEmployee from "./routes/CreateEmployee";
import Root from "./routes/Root";
import UpdateEmployee from "./routes/UpdateEmployee";

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "create/",
                element: <CreateEmployee />,
            },
            {
                path: "edit/:id",
                element: <UpdateEmployee />,
            },
            {
                path: "/",
                element: <EmployeeContainer />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.Fragment>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.Fragment>
);
