import React from "react"
import { Redirect } from "react-router-dom"
import {connect} from 'react-redux'

let mapStateToPropsForRedirect= (store) =>{
    return{
        isAuth:store.authStore.isAuth,
        // isAuth:false
    }
}

export const withNoAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedNoAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)
    
    return ConnectedNoAuthRedirectComponent
}


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth) return <Component {...this.props}/>
            return <Redirect to='/Profile'/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
}