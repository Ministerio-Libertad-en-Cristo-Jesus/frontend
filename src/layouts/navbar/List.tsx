import { type listProps } from '../../types/types'
import { Link } from 'react-router-dom'

const List = ({ items, listStyle, itemStyle }: listProps) => {
  return (
    <ul className={listStyle}>
      {
        items.map((item, index) => {
          return (
            <li key={index} className={itemStyle}>
              <Link to={item.rute}>{item.name}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List
