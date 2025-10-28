import { CheckCheck, ChevronsRight, List } from "lucide-react"
import { useState } from "react"
import { NavLink} from "react-router"

const MenuContent = () => {

  const [activePage,setActivePage] = useState('tasks');

  const handleActivePage = (page:string) => {
    setActivePage(page)
  }

  return (
    <div className='flex flex-col p-5 gap-3'>
        <p className="font-bold">TASKS</p>
        <ul className="flex flex-col gap-2">

            <li className={`text-md nav-links-menu p-2 ${activePage === 'upcoming' ? 'active-page': ''}`} onClick={()=>handleActivePage('upcoming')}>
              <NavLink className='flex items-center justify-start' to={'/upcoming'}>
                <span className="pe-2"><ChevronsRight className="p-1" /></span>Upcoming
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu p-2 ${activePage === 'tasks' ? 'active-page': ''}`} onClick={()=>handleActivePage('tasks')}>
              <NavLink className='flex items-center justify-start' to={'/tasks'}>
                <span className="pe-2"><List className="p-1"/></span> Today
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu p-2 ${activePage === 'completed' ? 'active-page': ''}`} onClick={()=>handleActivePage('completed')}>
              <NavLink className='flex items-center justify-start' to={'/completed'}>
                <span className="pe-2"><CheckCheck className="p-1" /></span>Completed
              </NavLink>
            </li>

        </ul>
    </div>
  )
}

export default MenuContent