import React from 'react'
import { connect } from 'react-redux'
import Reader from '../components/page-holder/Page/Reader/Reader'
import {addFragment} from '../reducers/fragmentReducer'




const mapStateToProps =(store)=>{
    return{
    }
}


export default connect  (mapStateToProps, {addFragment} )(Reader);