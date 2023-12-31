import headerImg from '../../assets/image/ofrenda-header.jpg'

const HeaderOffering = () => {
  return (
    <header className='flex relative justify-center'>

      <div className='w-full h-[600px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <div className='w-full absolute px-10 lg:px-24 bottom-10 flex flex-col items-center'>
        <h3 className='font-noto font-black text-whiteI mb-2 text-3xl lg:text-5xl text-center'>
          ¡Ofrendas y Diezmos!
        </h3>
        <p className='font-noto font-light text-whiteI text-base lg:text-xl text-center'>
          Dios ama al dador alegre.
        </p>
      </div>

      <img
      className='w-full h-[600px] object-cover max-w-[1440px]'
      src={headerImg}
      alt="headerImage"
      />

    </header>
  )
}

export default HeaderOffering
