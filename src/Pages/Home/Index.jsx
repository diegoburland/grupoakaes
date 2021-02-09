import React, {useState} from 'react';
import NavbarComponet from '../../Components/Navbar/Container';

import './Style.css';

const HomeIndex = () => {
    const [title, setTitle] = useState('Vivair');
    return (
      <>
        <NavbarComponet name="TestTravels"/>
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 banner">
                <div className="banner--container">
                  <h3 className="banner--text">
                    Sabemos que quieres viajar en un {title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default HomeIndex;