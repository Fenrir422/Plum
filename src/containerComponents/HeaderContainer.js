import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { AuthThunk, showMenuButton, hideMenuButton, LogoutThunk} from '../reducers/authReducer'

class HeaderContainer extends React.Component {
    
    componentDidMount(){
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.isAuth !== prevProps.isAuth){
            console.log(this.props.isAuth, 'COMPONENTDIDUPDATE')
        }
    }
    render () {
        return<>
                <Header props={this.props} 
                        showMenu={this.props.showMenu} 
                        showMenuButton={this.props.showMenuButton} 
                        hideMenuButton={this.props.hideMenuButton}
                        LogoutThunk={this.props.LogoutThunk}
                        isAuth={this.props.isAuth}
                        fullName={this.props.fullName}
                />
            </>
    }
}

let mapStateToProps =(store)=> {
    return {
        fullName: store.profileStore.fullName,
        store:store.authStore,
        showMenu:store.authStore.showMenu,
        isAuth:store.authStore.isAuth
    }
}


export default connect (mapStateToProps, {AuthThunk, showMenuButton, hideMenuButton, LogoutThunk }) (HeaderContainer);