import React, {useState} from 'react';
import FormComponet from '../../Components/Form/FormComponent'

import './Style.css';

const HomeIndex = ({company}) => {
    
    return (
      <>
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12 banner">
                <div className="banner--container">
                  <h3 className="banner--text">
                    {company !== ''? 'Sabemos que quieres viajar en un ' + company: ''}
                  </h3>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <FormComponet/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default HomeIndex;