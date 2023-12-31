import { FC } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App: FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
