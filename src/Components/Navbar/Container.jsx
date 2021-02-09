import React from 'react';
import NavbarIndex from './Index';
import items from '../../items';

const NavbarComponet = ({name}) => {
    return (
        <NavbarIndex name={name} items={items}/>
    );
}
  
  export default NavbarComponet;