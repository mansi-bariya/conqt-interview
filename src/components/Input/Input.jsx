import React from 'react';
import inputStyles from "./input.module.css";

const Input = ({ type, id, placeholder, labelText, info }) => {
  return (
    <div className={inputStyles.inputWrap}>
      <label htmlFor={id} className={inputStyles.label}>{labelText}</label>
      <input type={type} id={id} placeholder={placeholder} className={inputStyles.customInput} />
      <span className={inputStyles.info}>{info}</span>
    </div>
  )
}

export default Input
