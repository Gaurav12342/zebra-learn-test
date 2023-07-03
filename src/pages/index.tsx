import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const MainPage: FC<any> = () => {
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate("/add-task");
  };
  return (
    <div className="my-5 space-x-5">
      <Button onClick={handleAddTask} variant="contained">
        Add Task
      </Button>
      <Button variant="contained">Task List</Button>
    </div>
  );
};

export default MainPage;
