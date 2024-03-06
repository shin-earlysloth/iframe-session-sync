import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APage from "./pages/APage";
import BPage from "./pages/BPage";
import CPage from "./pages/CPage";

const router = createBrowserRouter([
  {
    path: "/a",
    element: <APage />,
  },
  {
    path: "/b",
    element: <BPage />,
  },
  {
    path: "/c",
    element: <CPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
