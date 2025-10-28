import { BadgeAlert } from 'lucide-react'
import { NavLink } from 'react-router'

const PrioritySection = () => {
  return (
    <div>
     <p className="font-bold">PRIORITY</p>
        <ul className="flex flex-col gap-2">

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/priority/critical'}>
                <BadgeAlert className="h-5 w-5 text-red-600"/>
                <span className='ps-1 pt-0.5 text-md'>Critical</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/priority/high'}>
                <BadgeAlert className="h-5 w-5 text-orange-600"/>
                <span className='ps-1 pt-0.5 text-md'>High</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/priority/medium'}>
                <BadgeAlert className="h-5 w-5 text-yellow-600"/>
                <span className='ps-1 pt-0.5 text-md'>Medium</span>
              </NavLink>
            </li>

             <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/priority/low'}>
               <BadgeAlert className="h-5 w-5 text-green-600"/>
               <span className='ps-1 pt-0.5 text-md'>Low</span>
              </NavLink>
            </li>

        </ul>
    </div>
  )
}

export default PrioritySection