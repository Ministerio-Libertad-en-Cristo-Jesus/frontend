import { useLocation, useParams } from 'react-router-dom'
import Cards from './Cards'
import Pagination from './Pagination'
import { preachings2 } from '../../utils/preachingInfo'
import { useEffect } from 'react'

const Preachings = () => {
  const params = useParams()
  const location = useLocation()
  const cardXPage = 6
  const maxPage = Math.ceil(preachings2.length / cardXPage)
  const page = params.page === undefined || params.page === '0' ? 1 : parseInt(params.page)
  const preachings = preachings2.slice((page - 1) * cardXPage, page * cardXPage)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <main className="flex flex-col w-full items-center justify-center px-10 lg:px-24 mt-32 lg:mt-40 mb-10 lg:mb-24">
      <div className='flex flex-col w-full items-center justify-center max-w-[1440px]'>
        <header>
          <h1 className='font-noto font-black text-center text-blueI text-3xl lg:text-5xl mt-10'>Enseñanzas</h1>
          <p className='font-noto font-normal text-blueI text-center mb-16 text-xl mt-1'>Nuestras últimas enseñanzas</p>
        </header>
        <Cards preachings={preachings} />
        <Pagination page={page} maxPage={maxPage} />
      </div>
    </main>
  )
}

export default Preachings
