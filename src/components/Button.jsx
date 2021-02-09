import React from 'react'
import ReactDOM from 'react-dom';
import './Button.css'

export default props =>
    <a className={props.buttonClass} >{props.label}</a>