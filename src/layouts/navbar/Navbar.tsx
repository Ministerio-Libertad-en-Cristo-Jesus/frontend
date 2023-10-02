import List from './List'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-blue.svg'
import { list1, list2 } from './listsInfo'

const Navbar = () => {
  const listStyles = 'gap-16 items-center hidden xl:flex'
  const linksStyles = 'font-noto font-medium text-lg text-whiteI hover:text-yellow-500 transition-all duration-200'

  return (
    <nav className='flex justify-center px-28 h-20 bg-blueI'>

      <List items={list1} listStyle={listStyles} itemStyle={linksStyles} />

      <Link className='mt-4 mx-10' to='/'>
        <img className='min-w-[128px]' src={Logo} alt="logo-blue" />
      </Link>

      <List items={list2} listStyle={listStyles} itemStyle={linksStyles} />

    </nav>
  )
}

export default Navbar