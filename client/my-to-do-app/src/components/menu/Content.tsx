import { NavLink } from "react-router"

const Content = () => {
  return (
    <div className='flex flex-col'>
        <p>TASKS</p>
        <ul>
            <li><NavLink to={'/task'}>Task</NavLink></li>
        </ul>
    </div>
  )
}

export default Content