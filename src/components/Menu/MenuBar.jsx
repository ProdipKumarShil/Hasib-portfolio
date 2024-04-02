import {slide as Menu} from 'react-burger-menu'
const MenuBar = () => {
  return (
    <div className='md:hidden'>
      <Menu>
        <a id='home' className='menu-item' href='/'>Home</a>
      </Menu>
    </div>
  )
}

export default MenuBar