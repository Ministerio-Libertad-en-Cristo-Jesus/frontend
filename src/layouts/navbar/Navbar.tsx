import List from './List'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-blue.svg'
import { list1, list2 } from './listsInfo'
import MenuIcon from '../../assets/componentSVG/menu'

const Navbar = () => {
  const listStyles = 'gap-16 items-center hidden xl:flex'
  const linksStyles = 'font-noto font-medium text-lg text-whiteI hover:text-yellow-500 transition-all duration-200'

  return (
    <nav className='flex relative justify-center items-center px-28 h-20 bg-blueI'>

      <List items={list1} listStyle={listStyles} itemStyle={linksStyles} />

      <Link className='mt-20 mx-10' to='/'>
        <img className='min-w-[128px]' src={Logo} alt="logo-blue" />
      </Link>

      <List items={list2} listStyle={listStyles} itemStyle={linksStyles} />

      <div className='absolute right-14 stroke-whiteI hover:stroke-yellow-500 transition-all duration-200 hover:cursor-pointer xl:hidden'>
        <MenuIcon />
      </div>

    </nav>
  )
}

export default Navbar
