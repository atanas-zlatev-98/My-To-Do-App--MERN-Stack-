import MenuBar from '../menu/MenuBar'
import ContentMenu from '../content/ContentMenu'
import type { ReactNode } from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex grid-cols-3'>
        <MenuBar/>
        <ContentMenu children={children}/>
    </div>
  )
}

export default Layout