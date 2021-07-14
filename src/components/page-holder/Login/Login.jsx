import classes from './Login.module.css'
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input, Textarea } from '../../common/FormControl/FormControl';
import Loader from '../../common/FormControl/Loader/Loader';

const maxLength30 = maxLengthCreator(30);
const maxLength15 = maxLengthCreator(15)


const LoginForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            
            
            <div>   <Field  className={classes.formField} 
                            placeholder={"Enter your email"} 
                            component={Input} 
                            name={"email"}
                            validate={[required, maxLength30]}
                    />
            </div>
            <div >  <Field  className={classes.formField} 
                            placeholder={"Enter your password"} 
                            component={Input} 
                            name={"password"}
                            type={"password"}
                            validate={[required, maxLength15]}
                    />
            </div>
            
            <div className={classes.checkBox}>   
                <Field  type={"checkbox"} 
                        component={'input'} 
                        name={"rememberMe"}
                            
                    />
                            <span className={classes.checkBoxText}>Remember Me</span>
            </div>
            <div className={classes.buttonsWrapper}>
                <div><button className={classes.loginButton}>Sign In</button></div>
                <div className={classes.registrationButton}>Sign Up</div>
            </div>
            <div className={classes.logicWrapper}>{props.error && <div className={classes.formError}>{props.error +' '+ 'or Password'}</div>}</div>   
        </form>
    )
}

const LoginReduxForm = reduxForm ({form:'login'}) (LoginForm)

const Login=(props)=>{
    console.log(props.isFetching, 'fetching')
    const onSubmit = (FormData) =>{
        let {email, password, rememberMe } = FormData
        props.LoginThunk(email, password, rememberMe)
    }
    return(
        <div className={classes.LoginWrapper}>
            <div></div>
            <div className={classes.LoginForm}>
                <span className={classes.logo}>Plummet</span>
                <h1>Sign In</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
            <div className={classes.Loader}>{props.isFetching? <Loader loaderCenter={false}/>: null}</div>
            
        </div> 
    )
}

export default Login;