import { Car, FolderKanban, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const TypeSection = () => {
  return (
    <div>
     <p className="font-bold">TYPE</p>
        <ul className="flex flex-col gap-2">

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/priority/critical'}>
                <User className="h-5 w-5 text-red-600"/>
                <span className='ps-1 pt-0.5 text-md'>Personal</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/priority/high'}>
                <FolderKanban className="h-5 w-5 text-orange-600"/>
                <span className='ps-1 pt-0.5 text-md'>Work</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/priority/medium'}>
                <Car className="h-5 w-5 text-yellow-600"/>
                <span className='ps-1 pt-0.5 text-md'>Hobby</span>
              </NavLink>
            </li>

        </ul>
  </div>
  )
}

export default TypeSection