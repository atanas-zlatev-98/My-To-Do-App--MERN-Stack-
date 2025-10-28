import TaskSection from "./TaskSection";
import PrioritySection from "./PrioritySection";
const MenuContent = () => {

  return (
    <div className='flex flex-col p-5 gap-3'>
      <TaskSection/>
      <PrioritySection/>

    </div>
  )
}

export default MenuContent