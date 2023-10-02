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
