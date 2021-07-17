import axios from "axios";
import { initialize } from "redux-form";
import { setMainPhoto } from "../reducers/ProfileReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY":"d0e1ffa1-1310-4191-a40d-4edcecca4110"
  }
});




export const getUsers = (pageSize,currentPage)=> {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
    .then(response=>{
            return response.data}
          )
}


export const unfollowUser = (id) => {
  return instance.delete(`follow/${id}`)
  .then(response=>{
    return response.data
  })
}

export const followUser =(id) => {
  return instance.post(`follow/${id}`)
  .then(response=>{
    return response.data
  })
}

export const Authorisation =()=>{
  return instance.get(`auth/me`)
  .then(response=>{
    return response.data
  })
}

export const ProfileApi = {
  getProfile(userId){
    return instance.get(`profile/${userId}`)
    .then(response=>{
      return response.data
    })
  },

  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },

  updateStatus(status){
    return instance.put(`profile/status`, {status})
  },
  
  SetProfile(profile){
    return instance.put(`profile`, profile)
  },

  setMainPhoto(photoFile) {
    var formData = new FormData();
    formData.append("image", photoFile )
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}




export const Login =(email, password, rememberMe)=>{
  return instance.post(`auth/login`, {email, password, rememberMe})
  .then(res=>{return res.data})
}

export const Logout =()=> {
  return instance.delete(`auth/login`)
  .then(response=>{
    return response.data
  })
}
