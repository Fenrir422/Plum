import { AuthThunk } from "./authReducer";


let initialState = {
    initialaized :false
};

const appReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                initialaized: true,
            }
        default: return state;
    }
}



export const initializingSuccess =(FormData)=>({type:'SET-INITIALIZED'})

export const initialaizeThunk =()=>{
    return (dispatch)=>{
        let promise = dispatch(AuthThunk())
        Promise.all([promise]).then(()=>{
            dispatch(initializingSuccess())
        })
        
    }
}


export default appReducer;