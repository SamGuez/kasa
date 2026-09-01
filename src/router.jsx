import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/logement/:id", element: <Logement /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <Error404 /> }
]);

export default router;
