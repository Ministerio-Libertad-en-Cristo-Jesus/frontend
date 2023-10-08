import LogoMin from '../../../assets/componentSVG/LogoMin'

const HeaderMapSection = () => {
  return (
    <header className='flex items-center mb-12 lg:mb-16'>
      <LogoMin />
      <div className='ml-12'>
        <h2 className='font-noto text-whiteI font-black text-5xl'>Encuentranos</h2>
        <p className='font-noto text-whiteI font-thin text-[2.65rem]'>En nuestras sedes</p>
      </div>
    </header>
  )
}

export default HeaderMapSection
