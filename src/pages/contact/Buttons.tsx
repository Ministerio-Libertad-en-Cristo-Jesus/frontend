import ButtonContact from '../../components/ButtonContact'
import { buttonsContactInfo } from '../../utils/buttonsContactinfo'

const Buttons = () => {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-8 w-full">
      {
        buttonsContactInfo.map((button, index) => (
          <ButtonContact
          key={index}
          text={button.text}
          icon={button.icon}
          url={button.url}
          green={button.green}
          />
        ))
      }
    </div>
  )
}

export default Buttons
