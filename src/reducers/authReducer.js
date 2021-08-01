import {ProfileApi, Authorisation, Login, Logout, getCaptcha }  from '../api/api'
import setUserData from '../actionCreators/setUserData'
import toggleIsFetching from '../actionCreators/FetchingAC';
import { stopSubmit } from 'redux-form';


let initialState = {
    id :null,
    email: null,
    login: null,
    fullName:'login',
    password: null,
    rememberMe: true,
    isAuth: false,
    showMenu: false,
    lookingForAJob: true,
    navPhoto: null,
    isFetching: false,
    captcha: null,
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET-USER-DATA':
            console.log(action.data, action.isAuth)
            return {
                ...state,
                ...action.authData,
                isAuth: action.isAuth

            }
        case 'SET-FORM-DATA':
            return {
                ...state,
                ...action.FormData
            }
        case 'SHOW-MENU':
            return {
                ...state,
                showMenu: true 
            }
        case 'HIDE-MENU':
            return {
                ...state,
                showMenu: false 
            }
        case 'SET-LOGIN-NAV-PHOTO':
            return {
                ...state,
                navPhoto: action.data.photos.small,

            }
        case 'SET-LOGIN-NAME':
            return {
                ...state,
                fullName: action.fullName,
            }    
        case 'TOGGLE-IS-FETCHING':
            return{
                ...state,
                isFetching: action.isFetching
            }
        case 'SET-CAPTCHA':
            debugger;
            return {
                ...state,
                captcha: action.captcha
            }
        default: return state;
    }
}


export const AuthThunk =()=> (dispatch)=>{
        let isAuth = true;
        return Authorisation()
        .then(data => {
                if (data.resultCode == 0) {
                        // let authData = {...data.data, isAuth }
                        dispatch(setUserData(data.data, isAuth))
                        ProfileApi.getProfile(data.data.id)
                            .then(data=>{
                        dispatch(setLoginNavPhoto(data))
                        dispatch(setLoginName(data.fullName))
                    })
                    }
                }
        )}
export const captchaThunk = (id)=> async (dispatch)=> {
        let response = await getCaptcha()
            {
                dispatch(setCaptcha(response.data.url))
            }  
}
export const LoginThunk =(email, password, rememberMe, captcha)=>{
    let FormData = {email, password, rememberMe, captcha}
    return (dispatch)=>{
        dispatch(toggleIsFetching(true))
        dispatch(setFormData(FormData))
        Login(email, password, rememberMe, captcha).then(data=>{
            if(data.resultCode === 0){
                
                dispatch(AuthThunk())
                dispatch(toggleIsFetching(false))
            } else {
                debugger;
                if(data.resultCode === 10){
                    debugger;
                    dispatch(captchaThunk())
                }
                let message = data.messages.length > 0? data.messages[0] : "some error"
                dispatch(stopSubmit("login",{_error:message}))
            }
        })

    }
}


export const LogoutThunk = () => {
    let logoutData = {id:null,email: null, login:null}
    let isAuth = false
    return (dispatch) =>{
        Logout().then(data=>{
            if(data.resultCode === 0 ){
                dispatch(setUserData(logoutData, isAuth))
                dispatch(hideMenuButton())
            }
        })
    }
}

export const setFormData =(FormData)=>({type:'SET-FORM-DATA', FormData})
export const showMenuButton =()=>({type:'SHOW-MENU'})
export const hideMenuButton =()=>({type:'HIDE-MENU'})
export const setLoginNavPhoto =(data)=>({type:'SET-LOGIN-NAV-PHOTO', data})
export const setLoginName =(fullName)=>({type:'SET-LOGIN-NAME', fullName})
export const setCaptcha = (captcha)=> ({type:'SET-CAPTCHA', captcha})


export default authReducer;