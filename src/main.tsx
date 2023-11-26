import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NotFound } from "./pages/error/NotFound.tsx";
import { Root } from "./pages/root/Root.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />} path="/" />
      <Route element={<App />} path="/dev-info" />
      <Route element={<NotFound />} path="*" />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
