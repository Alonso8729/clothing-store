import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/clothing-store/',
        element: <App />
    },
    {
        path: '/clothing-store/products/',
        element: <span>Category</span>
    },
    {
        path: '/clothing-store/product/',
        element: <span>Product</span>
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);