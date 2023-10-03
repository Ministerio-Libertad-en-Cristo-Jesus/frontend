import oracionImg from '../../assets/image/imagen-web-1.jpg'

const Slide = () => {
  return (
    <div className='flex w-full max-w-[1440px] relative z-[1] justify-center'>

      <div className='w-full h-[600px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <div className='absolute left-24 bottom-16 '>
        <h2 className='font-noto font-black text-whiteI text-4xl'>La Gracia Divina y la Fortaleza en la Debilidad</h2>
        <p className='font-noto font-extralight text-whiteI text-sm max-w-[850px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis metus ipsum, at tempus nisl convallis quis. Nam fringilla rhoncus nunc, non bibendum ipsum imperdiet vel. Mauris interdum ut lorem in iaculis. Ut convallis elit eu mauris rutrum laoreet. Sed hendrerit egestas velit id mattis. Ut et rhoncus lectus. Praesent at dolor at dui bibendum luctus eget sit amet purus. Fusce tempus magna non risus efficitur, ac pulvinar orci ornare. Sed elit tellus, volutpat non dictum nec, feugiat at lorem. Etiam pellentesque aliquet nisi eget mollis. Sed quis est nunc.</p>
        <p className='font-noto font-bold text-whiteI mt-5 underline hover:text-blue-700 hover:cursor-pointer transition-all duration-300'>Leer más</p>
      </div>

      <img
      className='h-[600px] w-full max-w-[1440px] object-cover'
      src={oracionImg}
      alt="que-es-la-oracion" />

    </div>
  )
}

export default Slide
