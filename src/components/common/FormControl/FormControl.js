import React from "react"
import classes from './FormControl.module.css'
import {Element} from '../../../hoc/FormElementWrapper'

export const FormControl =({input,meta,Formtype,...props})=>{
    const error = meta.error && meta.touched
    return(
        <div className={error ? classes.hasError : ''}>
            <Formtype {...input} {...props}/>
            {error && <div className={classes.errorMessage}>{meta.error}</div>}
        </div>
    )
}


export const Input = (props) => {
    return <FormControl {...props} Formtype="input"/>
}

/////АБО HOC


export const Textarea = Element("textarea")