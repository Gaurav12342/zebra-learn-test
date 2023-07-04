import { FC, useEffect, useState } from "react";
import Input from "../component/Input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import SelectComponent from "../component/Select";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import "react-datepicker/dist/react-datepicker.css";

const ManageTask: FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [tasks, setTasks] = useState<any>([]);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit) {
      localStorage.setItem("task-list", JSON.stringify(tasks));
    }
  }, [isSubmit, navigate, tasks]);

  const listsArray: any = localStorage.getItem("task-list");

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    control,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      priority: "",
      dueDate: new Date(),
    },
  });

  const priorityOptions = [
    { label: "High", value: "high" },
    { label: "Normal", value: "normal" },
    { label: "Middle", value: "middle" },
  ];

  const handleChange = (dateChange: any) => {
    setStartDate(dateChange);
  };

  const onSubmit = (data: any) => {
    const newArray = [];
    const obj = {
      ...data,
      id: Date.now(),
      dueDate: dayjs(data?.dueDate).format("MM-DD-YYYY"),
    };
    newArray.push(obj);
    setIsSubmit(true);
    setTasks([...tasks, ...newArray]);
  };

  return (
    <div className="my-10 w-[100%]">
      <div className="flex justify-center mb-5">
        <h1 className="text-3xl font-bold"> Create Task</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center space-y-5">
          <div>
            <Input
              name={"title"}
              placeholder={"Title"}
              register={register("title")}
            />
          </div>

          <div>
            <Input
              name={"description"}
              placeholder={"Description"}
              register={register("description")}
              multiline
              rows={4}
            />
          </div>

          <div>
            <SelectComponent
              register={register("priority")}
              options={priorityOptions}
              label={"Priority"}
            />
          </div>

          <div>
            <Controller
              name="dueDate"
              control={control}
              defaultValue={startDate}
              render={() => (
                <DatePicker
                  selected={startDate}
                  placeholderText="Select date"
                  onChange={handleChange}
                />
              )}
            />
          </div>

          <div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Priority</TableCell>
                <TableCell align="left">Due date</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {JSON.parse(listsArray)?.length > 0 &&
                JSON.parse(listsArray).map((row: any) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">
                      <Chip
                        label={row.priority}
                        color="success"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Chip
                        label={row.dueDate}
                        color="primary"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" sx={{ marginRight: 2 }}>
                        Edit
                      </Button>
                      <Button variant="outlined">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ManageTask;
