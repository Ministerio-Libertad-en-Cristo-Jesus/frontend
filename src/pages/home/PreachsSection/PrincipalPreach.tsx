import preach1 from '../../../assets/image/imagen-web-1.jpg'
import Button from '../../../components/Button'

const PrincipalPreach = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap items-center m-10 lg:m-24'>

      <img
      className=' lg:w-[420px] h-[370px] lg:h-[420px] mr-12 object-cover rounded-xl'
      src={preach1}
      alt="preach1" />

      <div className='flex flex-col mt-8 lg:mt-0 items-center'>

        <div>
          <h2 className='font-noto font-black text-blueI text-2xl lg:text-4xl'>La Gracia Divina y la Fortaleza en la Debilidad</h2>
          <p className='font-noto font-bold mt-2 lg:mt-4 text-blueI text-lg lg:text-xl'>Pastor José Petit</p>
          <p className='font-noto font-medium mt-1 text-gray-800 text-xs lg:text-sm'>1 de octubre del 2023</p>
          <p className='font-noto font-normal mb-8 line-clamp-4 text-blueI text-xs lg:text-lg max-w-[850px] mt-3 mr-10 lg:mr-0 lg:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis metus ipsum, at tempus nisl convallis quis. Nam fringilla rhoncus nunc, non bibendum ipsum imperdiet vel. Mauris interdum ut lorem in iaculis. Ut convallis elit eu mauris rutrum laoreet. Sed hendrerit egestas velit id mattis. Ut et rhoncus lectus. Praesent at dolor at dui bibendum luctus eget sit amet purus. Fusce tempus magna non risus efficitur, ac pulvinar orci ornare. Sed elit tellus, volutpat non dictum nec, feugiat at lorem. Etiam pellentesque aliquet nisi eget mollis. Sed quis est nunc.</p>
        </div>

        <Button text='Leer Prédica' dark={false} onClick={() => {}} />

      </div>

    </div>
  )
}

export default PrincipalPreach
