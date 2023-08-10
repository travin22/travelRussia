import { useState } from 'react'
import { Link } from 'react-router-dom'
import dropdownStyle from './dropdown.module.css'

function Dropdown() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={dropdownStyle.dropdown}>
      <button
        type="button"
        className={dropdownStyle.dropdownBtn}
        // eslint-disable-next-line no-unused-vars
        onClick={(e) => setIsActive(!isActive)}
      >
        Menu
      </button>

      {isActive && (
      <div className={dropdownStyle.dropdownContent}>
        <div>
          <Link to="/"><button type="button" className={dropdownStyle.dropdownItem}>Button1</button></Link>
        </div>
        <div>
          <Link to="/"><button type="button" className={dropdownStyle.dropdownItem}>Button2</button></Link>
        </div>
      </div>
      )}

    </div>
  )
}

export default Dropdown
