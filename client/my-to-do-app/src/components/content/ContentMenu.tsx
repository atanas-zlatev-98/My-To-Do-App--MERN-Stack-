import "./ContentMenu.style.scss";
import { Button } from "../ui/button";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";

const ContentMenu = ({children}:{children:ReactNode}) => {
  const navigate = useNavigate();

  const createTask = () =>{
    navigate('/tasks/create')
  }

  return (
    <div className="flex w-screen flex-col bg-white">
      <div className="flex flex-row justify-items-start items-center gap-3 p-4">
        <h1 className="text-5xl roboto">
          Total Tasks
        </h1>
        <Button className="">0</Button>
        <Button onClick={createTask}>Add Task</Button>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default ContentMenu;
