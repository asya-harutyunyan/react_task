import { useRoutes } from "react-router-dom";
import FavoritePage from "../pages/Favorite";
import NewPage from "../pages/New";
import PopularPage from "../pages/Popular";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <PopularPage />,
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
    },
    {
      path: "/new",
      element: <NewPage />,
    },
  ]);
};

export default Routes;
