import { type CardImageType } from '../types/types'
import contactImg from '../assets/image/contact.jpg'
import aboutUsImg from '../assets/image/aboutUs.jpg'
import prayersImg from '../assets/image/oracion.jpg'

export const pagesInfo: CardImageType[] = [
  {
    row: 'sm:row-span-2',
    title: 'Petición de Oración',
    image: prayersImg,
    link: '/prayers'
  },
  {
    row: '',
    title: 'Sobre Nosotros',
    image: aboutUsImg,
    link: '/aboutus'
  },
  {
    row: '',
    title: 'Contactanos',
    image: contactImg,
    link: '/contact'
  }
]
