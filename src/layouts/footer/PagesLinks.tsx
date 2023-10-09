import { useNavigate } from 'react-router-dom'
import { urlPagesInfo } from '../../utils/pagesInfo'

const PagesLinks = () => {
  const navigate = useNavigate()
  return (
    <ul className='flex flex-wrap gap-8 items-center justify-center sm:gap-16'>
      {
        urlPagesInfo.map((pageInfo) => (
          <li
          className="font-noto font-medium text-lg text-whiteI hover:text-yellow-500 transition-all duration-200 hover:cursor-pointer"
          onClick={() => { navigate(pageInfo.link) }}
          key={pageInfo.text}>
            {pageInfo.text}
          </li>
        ))
      }
    </ul>
  )
}

export default PagesLinks
