import { type LatLngTuple } from 'leaflet'

export interface itemList {
  rute: string
  name: string
}

export interface listProps {
  items: itemList[]
  listStyle: string
  itemStyle: string
}

export interface ButtonSidepanelProps extends itemList {
  svg: JSX.Element
}

export interface ButtonsSidepanelProps {
  buttons: ButtonSidepanelProps[]
}

export interface DateModel {
  day: number
  month: number
  year: number
}

export interface Preach {
  title: string
  id: number
  content: string
  image: string
  pastor: string
  date: DateModel
}

export interface Preaches {
  preaches: Preach[]
}

export interface ButtonType {
  text: string
  dark: boolean
  onClick: () => void
}

export interface CardImageType {
  row: string
  title: string
  image: string
  link: string
}

export interface MapType {
  popup: string
  position: LatLngTuple
}

export interface MapsNameType {
  paricua: boolean
  orlando: boolean
}

export interface MapCarrouselType {
  whatSelected: MapsNameType
}

export interface SelectorMapType {
  whatSelected: MapsNameType
  changeMap: React.Dispatch<React.SetStateAction<{
    paricua: boolean
    orlando: boolean
  }>>
}

export interface CheckMapType extends SelectorMapType {
  isSelected: boolean
  name: string
  name2: string
  title: string
  direction: string
}

export interface MapSelectInfoType {
  name: 'paricua' | 'orlando'
  name2: 'paricua' | 'orlando'
  title: string
  direction: string
}

export interface MapSlideInfoType {
  name: 'paricua' | 'orlando'
  position: LatLngTuple
  popup: string
  stateSvg: JSX.Element
  link: string
}

export interface MapSlideType extends MapSlideInfoType {
  isSelected: boolean
  rigth: boolean
}

export interface SocialMediaType {
  name: string
  link: string
  logo: JSX.Element
  description: string
  buttonText: string
}
