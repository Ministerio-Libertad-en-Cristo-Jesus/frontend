import { type ButtonSidepanelProps } from '../../types/types'
import HomeIcon from '../../assets/componentSVG/home'
import BookOpenIcon from '../../assets/componentSVG/book-open'
import HandIcon from '../../assets/componentSVG/hand'
import InfoIcon from '../../assets/componentSVG/info'
import ContactIcon from '../../assets/componentSVG/contact'
import CurrencyIcon from '../../assets/componentSVG/currency'

export const buttonsArray: ButtonSidepanelProps[] = [
  {
    svg: <HomeIcon />,
    rute: '/',
    name: 'Inicio'
  },
  {
    svg: <InfoIcon />,
    rute: '/aboutUs',
    name: 'Sobre nosotros'
  },
  {
    svg: <HandIcon />,
    rute: '/prayers',
    name: 'Oraciones'
  },
  {
    svg: <BookOpenIcon />,
    rute: '/preachings',
    name: 'Enseñanzas'
  },
  {
    svg: <CurrencyIcon />,
    rute: '/offering',
    name: 'Ofrendas'
  },
  {
    svg: <ContactIcon />,
    rute: '/contact',
    name: 'Contacto'
  }
]
