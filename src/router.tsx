import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./components/NotFound";
import Breed from "./components/Breeds";
import BreedImages from "./components/BreedImages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Breed />,
  },
  {
    path: "images/:id",
    element: <BreedImages />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
