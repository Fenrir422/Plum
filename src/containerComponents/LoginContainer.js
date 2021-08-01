import { connect } from "react-redux";
import Login from '../components/page-holder/Login/Login'
import { LoginThunk } from '../reducers/authReducer'
import { withAuthRedirect } from '../hoc/AuthRedirect'
import { compose } from "redux";





const mapStateToProps =(store)=>{
    return{
        loginData: store.authStore,
        isFetching: store.authStore.isFetching,
        captcha:store.authStore.captcha
    }
}

export default compose (
    connect (mapStateToProps, {LoginThunk}),
    withAuthRedirect
)(Login)

// export default connect (mapStateToProps, {LoginThunk})(Login)