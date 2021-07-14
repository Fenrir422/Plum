import React from "react"
import classes from '../components/common/FormControl/FormControl.module.css'

export const Element = Element => ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;
    return (
      <div className={ error ? classes.hasError : "" }>
        <Element {...input} {...props} />
        { error && <div className={classes.errorMessage}>{meta.error}</div> }
      </div>
    );
};