import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Home.page";

const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: "/",
  },
]);
export default router;
