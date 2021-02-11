import React, {useState} from 'react';
import items from '../../items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Style.css';

const NavbarComponet = ({name, handleLink}) => {

    const [company, setCompany] = useState('');

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
                                items.map((item)=> {
                                    return  <li  className={ item.name === company ? 'nav-item items--li active': 'nav-item items--li'} key={item.id}>
                                                <a onClick={handleLink} href="#" className="nav-link items--a" >{item.name}</a>
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
  
  export default NavbarComponet;