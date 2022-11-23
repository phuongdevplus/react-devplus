import React from 'react';
import Submenu from '../Submenu';

function Navigation(props) {
  return (
    <React.Fragment>
      <li className={props.submenu?'nav__link sub__menu':'nav__link'}>
        <a className="nav__link--href" href="#"> {props.value}</a>
        <div >
          {
            props.submenu?<Submenu/>:''
          }
        </div>
      </li>
    </React.Fragment>
  )
}

export default Navigation;