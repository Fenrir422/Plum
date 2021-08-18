import React from 'react'
import classes from './Loader.module.css'

const Loader =(props)=> {

    return(
        <div className={props.loaderCenter? classes.FetchingWrapperCenter:classes.FetchingWrapperRight}>
            <div className={classes.loader}></div>
        </div>
    )
}

export default Loader