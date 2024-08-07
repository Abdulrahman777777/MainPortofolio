import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Projects from "./Pages/Projects";
import { AnimatePresence } from "framer-motion";
import SomePretty from "./components/Ideas/SomePretty";
import Contact from "./Pages/Cntact";
import Four04 from "./components/Four04";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Four04 />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
