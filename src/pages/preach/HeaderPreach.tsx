interface Props {
  headerImg: string
}

const HeaderPreach = ({ headerImg }: Props) => {
  return (
    <header className='flex relative justify-center'>

      <div className='w-full h-[450px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <img
      className='w-screen h-[450px] object-cover max-w-[1440px]'
      src={headerImg}
      alt="headerImage"
      />

    </header>
  )
}

export default HeaderPreach
