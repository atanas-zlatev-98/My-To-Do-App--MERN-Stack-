import { getAllTasks } from '@/api/task-api';
import type { TaskFormData } from '@/types/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';


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
    <div>
      {tasks.length === 0 ? (<p>No tasks created</p>) : (
        tasks.map(task => <p key={task.title}>{task.title}</p>)
      )}
    </div>
  )
}

export default Tasks