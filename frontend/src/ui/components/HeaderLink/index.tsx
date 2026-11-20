import { Link } from 'react-router-dom'
import style from './style.module.css'
import type { Props } from './types'

export const HeaderLink: React.FC<Props> = ({
  href,
  text,
}) => {
  return (
    <Link className={style.component} to={href}>
      {text}
    </Link>
  )
}
