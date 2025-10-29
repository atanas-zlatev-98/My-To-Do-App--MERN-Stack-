import TaskSection from "./sections/TaskSection";
import PrioritySection from "./sections/PrioritySection";
import TypeSection from "./sections/TypeSection";
import { Input } from "../ui/input";

const MenuContent = () => {
  return (
    <div className="h-screen  flex flex-col p-5 gap-5">
      <div className="flex flex-col gap-3">
        <Input type="text" placeholder="Search" className="w-full" />
        <TaskSection />
      </div>
      <div className="flex flex-col gap-5">
        <TypeSection />
        <PrioritySection />
      </div>
    </div>
  );
};

export default MenuContent;
