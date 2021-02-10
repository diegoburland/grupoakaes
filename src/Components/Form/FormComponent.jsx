import React from 'react';
import { useForm } from "react-hook-form";
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faSignLanguage, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const FormComponet = ({name}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
      <div className="form">
        <form action="" className="form--form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form--input-group">
            <label htmlFor="" className="form--input-label">Nombre completo</label>
            <div className="form--input-wrap">
              <div className="form--wrap-icon">  
                <FontAwesomeIcon className="form--icon" icon={faUser}/>
              </div>
              <input type="text" className="form--input" name="fullname" defaultValue="" ref={register({ required: true })}/>
              {errors.fullname && <span className="form--input-error">Debe ingresar un su nombre completo</span>}
            </div>
          </div>
          <div className="form--input-group">
            <label htmlFor="" className="form--input-label">Email</label>
            <div className="form--input-wrap">
              <div className="form--wrap-icon">  
                <FontAwesomeIcon className="form--icon" icon={faEnvelope}/>
              </div>
              <input
                className="form--input"
                id="email"
                name="email"
                ref={register({
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "El email ingresado es inválido"
                  }
                })}
                type="email"
              />
              {errors.email && <span className="form--input-error" role="alert">{errors.email.message}</span>}
            </div>
          </div>
          <div className="form--input-group">
            <label htmlFor="" className="form--input-label">Celular</label>
            <div className="form--input-wrap">
              <div className="form--wrap-icon">  
                <FontAwesomeIcon className="form--icon" icon={faMobileAlt}/>
              </div>
              <input
                  className="form--input"
                  id="phone"
                  name="phone"
                  ref={register({
                    required: "El telefono es requerido",
                    minLength: {
                      value: 5,
                      message: "Debe contener más de 6 numeros"
                    },
                    maxLength: {
                      value: 15,
                      message: "Debe contener menos de 15 numeros"
                    }
                  })}
                  type="text"
                
                />
                {errors.phone && <span className="form--input-error" role="alert">{errors.phone.message}</span>}
            </div>
          </div>
          <div className="form--input-group">
            <label htmlFor="" className="form--input-label">Edad</label>
            <div className="form--input-wrap">
              <div className="form--wrap-icon">  
                <FontAwesomeIcon className="form--icon" icon={faSignLanguage}/>
              </div>
              <input className="form--input" name="age" type="number" maxLength="100" ref={register({ required: "La edad es requerida", min: 18, max: 100 })} />
              {errors.age && <span className="form--input-error" role="alert">Edad permitida entre 18 y 100</span>}
            </div>
          </div>
          <div className="form--input-group">
              <input type="submit" className="form--submit" value="Enviar"/>
          </div>
        </form>
      </div>
        
      </>
    );
}
  
  export default FormComponet;