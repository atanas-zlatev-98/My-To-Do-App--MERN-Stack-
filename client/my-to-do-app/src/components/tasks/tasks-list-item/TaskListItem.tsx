import { Badge } from "@/components/ui/badge";
import {Card,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import type { TaskFormData } from "@/types/types";
import { NavLink } from "react-router";

const TaskListItem = ({ task }: { task: TaskFormData }) => {
  return (
     <NavLink to={''}>
    <Card className="max-w-md pt-5">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription className="truncate">{task.description}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch justify-start">
        <div className="flex gap-2">
            <Badge>{task.taskType}</Badge>
        {task.priority === 'Low' && (<Badge variant='secondary' className="bg-green-800 text-white">{task.priority}</Badge>)}
        {task.priority === 'Medium' && (<Badge variant='secondary' className="bg-blue-500 text-white dark:bg-blue-600">{task.priority}</Badge>)}
        {task.priority === 'High' && (<Badge variant='destructive' className="bg-orange-800">{task.priority}</Badge>)}
        {task.priority === 'Critical' && (<Badge variant='destructive'>{task.priority}</Badge>)}
        </div>
      </CardFooter>
    </Card>
    </NavLink>
  );
};

export default TaskListItem;
