import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <p>ErrorElement</p>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "about",
            element: <About />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
