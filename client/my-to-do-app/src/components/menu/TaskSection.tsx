import { CheckCheck, ChevronsRight, List } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'

const TaskSection = () => {

  const [activePage,setActivePage] = useState('');

  const handleActivePage = (page:string) => {
    setActivePage(page)
  }

  return (
    <>
     <p className="font-bold">TASKS</p>
        <ul className="flex flex-col gap-2">

            <li className={`text-md nav-links-menu ${activePage === 'upcoming' ? 'active-page': ''}`} onClick={()=>handleActivePage('upcoming')}>
              <NavLink className='flex flex-row items-center p-2' to={'/upcoming'}>
                <ChevronsRight className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Upcoming</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu ${activePage === 'tasks' ? 'active-page': ''}`} onClick={()=>handleActivePage('tasks')}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks'}>
                <List className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Today</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu ${activePage === 'completed' ? 'active-page': ''}`} onClick={()=>handleActivePage('completed')}>
              <NavLink className='flex flex-row items-center p-2' to={'/completed'}>
                <CheckCheck className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Completed</span>
              </NavLink>
            </li>

        </ul>
    </>
  )
}

export default TaskSection