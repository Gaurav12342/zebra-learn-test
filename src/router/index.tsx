import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages";
import ManageTask from "../pages/ManageTask";
import ListsTask from "../pages/ListsTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/add-task",
    element: <ManageTask />,
  },
  {
    path: "/task-list",
    element: <ListsTask />,
  },
]);
