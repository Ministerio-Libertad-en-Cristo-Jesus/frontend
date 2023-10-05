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
