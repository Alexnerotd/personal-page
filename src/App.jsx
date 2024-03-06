import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Layout</p>,
    errorElement: <p>ErrorElement</p>,
    children: [
      {
        path: "home",
        element: <p>Home</p>,
        children: [
          {
            path: "about",
            element: <p>About</p>,
          },
          {
            path: "projects",
            element: <p>Projects</p>,
          },
          {
            path: "contact",
            element: <p>Contact</p>,
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
