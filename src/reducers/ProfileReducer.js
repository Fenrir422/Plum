import { ProfileApi } from '../api/api'

let initialState = {
    fullName:null,
    status:'no status',
    photos:'',
    userId:null,
    status:''
    
}

const profileReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'SET-NAME':
            return{
                
                ...state,
                ...action.data
            };
        case 'SET-STATUS':
            return{
                ...state,
                status:action.status
            }
        case 'SET-PHOTO':
            debugger;
            return {
                ...state,
                photos: action.photoFile
            }
        
        default: return state;
    }
    
}

export const setName = (data)=> ({type:'SET-NAME', data});
export const setStatus = (status)=> ({type:'SET-STATUS', status});
export const setMainPhoto = (photoFile)=>({type:'SET-PHOTO', photoFile})


export const getProfileThunkCreator = (userId)=>{
    return (dispatch)=> {
        ProfileApi.getProfile(userId).then(data=>{
            dispatch(setName(data))
        })
    };  
}

export const getStatusThunkCreator = (userId)=>{
    return (dispatch)=> {
        ProfileApi.getStatus(userId).then(response=>{
            dispatch(setStatus(response.data))
        })
    };  
}

export const updateStatusThunkCreator = (status)=>{
    return (dispatch)=> {
        ProfileApi.updateStatus(status).then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    };  
}

export const setMainPhotoThunkCreator = (photoFile)=> {
    return (dispatch)=> {
        ProfileApi.setMainPhoto(photoFile).then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setMainPhoto(response.data.data.photos))
            }
        })
    }
}


export default profileReducer;




