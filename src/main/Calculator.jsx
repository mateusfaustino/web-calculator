import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue:'0',
    clearDisplay:false,
    operation:null,
    values:[0,0],
    currentValue:0
};
export default class Calculator extends Component{
    render(){
        return(
            <div className="calculator">
                <Display value={100}/>
                <div className="key-board">
                    <div className="numbers-column">
                        <Button buttonClass="button orange-label" label="C" />
                        <Button buttonClass="button number" label="7" />
                        <Button buttonClass="button number" label="4" />
                        <Button buttonClass="button number" label="1" />    
                    </div>
                    <div className="numbers-column">
                    
                        <Button buttonClass="button orange-label" label=".." />
                        <Button buttonClass="button number" label="8" />
                        <Button buttonClass="button number" label="5" />
                        <Button buttonClass="button number" label="2" />    
                        <Button buttonClass="button number" label="0" />    
                    </div>
                    
                    <div className="numbers-column">
                        <Button buttonClass="button percentage" label="%" />
                        <Button buttonClass="button number" label="9" />
                        <Button buttonClass="button number" label="6" />
                        <Button buttonClass="button number" label="3" />    
                        <Button buttonClass="button number" label="." />    
                    </div>
                    
                    <div className="numbers-column " id="operation-buttons-column">
                        <Button buttonClass="button operation" label="÷" />
                        <Button buttonClass="button operation" label="×" />
                        <Button buttonClass="button operation" label="–" />
                        <Button buttonClass="button operation" label="+" />    
                        <Button buttonClass="button equal" label="=" />    
                    </div>
                
                </div>
            </div>
        )
    }
}