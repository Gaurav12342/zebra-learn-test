import { FC, useState, useEffect } from "react";

const ListsTask: FC = () => {
  const [data, setData] = useState<any>([]);
  console.log("🚀 ~ file: ListsTask.tsx:12 ~ data:", data);

  useEffect(() => {
    const tasksList: any = localStorage.getItem("task-list");
    setData(JSON.parse(tasksList));
  }, [localStorage,data]);

  return (
    <div>
      
    </div>
  );
};

export default ListsTask;
