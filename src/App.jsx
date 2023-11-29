import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layouts/Home";
import Contacto from "./layouts/Contacto";
import Nosotros from "./layouts/Nosotros";
import Nav from "./layouts/Nav";
Nav

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Contacto",
      element: <Contacto/>,
    },
    {
      path: "/Nosotros",
      element: <Nosotros/>,
    }
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
