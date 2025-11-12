import { getAllTasks } from '@/api/task-api';
import type { TaskFormData } from '@/types/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import TaskListItem from './tasks-list-item/TaskListItem';


const Tasks = () => {
  
  const [tasks,setTasks] = useState<TaskFormData[]>([]);
  const location = useLocation();

  useEffect(()=>{

    const fetchTasks = async ()=>{

      try{
          const tasks = await getAllTasks();
          setTasks(tasks.allTasks)
      }catch(err){
        if(err instanceof Error){
          throw new Error(err.message)
        }else {
          console.log('Unknown error');
        }
      }
    }

    fetchTasks();

  },[location.state?.refresh])

  return (
    <div className='grid md:grid-cols-4 gap-4 p-5'>
      {tasks.length === 0 ? (<p>No tasks created</p>) : (
        tasks.map(task => <TaskListItem key={task.title} task={task}></TaskListItem>)
      )}
    </div>
  )
}

export default Tasks