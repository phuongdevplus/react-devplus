import React, { useState } from 'react';
function Submenu() {
  const [showSubmenu, setShowSubmenu] = useState(false)
  return (
    <React.Fragment>
      <ul className= {showSubmenu?"sub__menu-option option--active":"sub__menu-option"}>
        <li className=" nav__link-option">
          <a className='nav__link-option--href' href="https://stunited.vn/st-software/">One plus campus</a>
        </li>
        <li className=" nav__link-option">
          <a className='nav__link-option--href' href="https://stunited.vn/st-digital/">Two plus campus</a>
        </li>
        <li className=" nav__link-option">
          <a className='nav__link-option--href' href="https://stunited.vn/st-incubation/"
          >Three plus campus</a
          >
        </li>
        <li className="close__btn-option option__toggle--active " onClick={()=> setShowSubmenu(false)}>
          <i className="fa-solid fa-xmark"></i>&nbsp;Close
        </li>
      </ul>
      <div className="nav__icon">
        <p className="icon__plus">+</p>
        <p className="icon__minus">-</p>
      </div>
      <div className="nav__icon-1" onClick={()=> setShowSubmenu(!showSubmenu)} >
        <i className="fa-solid fa-angle-up icon-plus icon__up" style={{display:showSubmenu?"block":"none" }}></i>
        <i className="fa-solid fa-angle-down icon-minus icon__down" style={{display:showSubmenu?"none":"block" }}></i>
      </div>
    </React.Fragment>
  )
}
export default Submenu;