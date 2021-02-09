import React from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const NavbarIndex = ({items, name}) => {
    return (
      <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand navbar--logo" href="#">{name}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="navbar--hamburger" icon={faBars}/>
                </button>
                <div className="collapse navbar-collapse items" id="navbarNav">
                    <ul className="navbar-nav items--ul">
                        {
                            items.map((item, key )=> {
                                return  <li className="nav-item items--li" key={item.id}>
                                        <a href="#" className="nav-link items--a" >{item.name}</a>
                                    </li>
                                
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
      </>
    );
  }
  
  export default NavbarIndex;