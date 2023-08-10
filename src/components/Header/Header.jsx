import { Link } from 'react-router-dom'
import headerStyle from './header.module.css'
import logo from '../../image/logo.jpg'
import lk from '../../image/lk.png'
import Dropdown from '../Dropdown/Dropdowm'

export function Header() {
  return (
    <div className={headerStyle.wrapper}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className={headerStyle.logo} />
        </Link>
      </div>
      <div className={headerStyle.navigate}>
        <div>
          <img src={lk} alt="lk" className={headerStyle.lk} />
        </div>
        <div>
          <Dropdown />
        </div>
      </div>

    </div>
  )
}
