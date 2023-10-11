import BookOpenWhiteIcon from '../../assets/componentSVG/bookOpenWhite'
import HandWhiteIcon from '../../assets/componentSVG/handWhite'
import ButtonPage from '../../components/ButtonPage'

const ButtonsPages = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full px-10 lg:px-24 pt-5 lg:pt-12 gap-8">
      <ButtonPage text='Peticion de Oración' green={false} url='/prayers' icon={<HandWhiteIcon />} />
      <ButtonPage text='Enseñanzas' green={false} url='/preachings' icon={<BookOpenWhiteIcon />} />
    </div>
  )
}

export default ButtonsPages
