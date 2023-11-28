import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import Nav from "./layouts/Nav";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Nav",
      element: <Nav />,
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
