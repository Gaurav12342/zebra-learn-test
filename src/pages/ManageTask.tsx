import { FC, useState } from "react";
import Input from "../component/Input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import SelectComponent from "../component/Select";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

const ManageTask: FC = () => {
  const [startDate, setStartDate] = useState(new Date());

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
      dueDate: dayjs(data?.dueDate).format("MM-DD-YYYY"),
    };

    newArray.push(obj);
    console.log("🚀 ~ file: ManageTask.tsx:20 ~ onSubmit ~ data:", newArray);
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
    </div>
  );
};

export default ManageTask;
