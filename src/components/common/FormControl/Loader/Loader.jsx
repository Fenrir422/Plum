import React from 'react'
import classes from './Loader.module.css'





const Loader =(props)=> {


    // let a = loaderPosition.loaderPosition;
    // let center = false;
    // let right = false;
    // if (a === 1) {
    //     return center = true;
    // }else{if(a === 2){
    //     return right = true;
    // }}

    // console.log(right, 'lel')
    console.log(props)
    return(
        <div className={props.loaderCenter? classes.FetchingWrapperCenter:classes.FetchingWrapperRight}>
            <div className={classes.loader}></div>
        </div>
    )
}

export default Loader