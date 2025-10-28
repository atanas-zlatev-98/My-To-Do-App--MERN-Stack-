import "./ContentMenu.style.scss";
import { Button } from "../ui/button";
import type { ReactNode } from "react";

const ContentMenu = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex w-screen flex-col bg-white">
      <div className="flex flex-row justify-items-start items-center">
        <h1 className="text-5xl roboto p-4">
          Total Tasks
        </h1>
        <Button className="p-4">0</Button>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default ContentMenu;
