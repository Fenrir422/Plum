import toggleIsFetching from '../actionCreators/FetchingAC'
import setCurrentPage from '../actionCreators/setCurrentPageAC'
import setFriends from '../actionCreators/setFriendsAC'
import followingInProgress from '../actionCreators/FollowingInProgress'
import follow from '../actionCreators/follow'
import unfollow from '../actionCreators/unfollow'
import { getUsers, unfollowUser, followUser } from '../api/api'
/////FRIENDS STATE


let initialState = {
    users:[{name:'gosha', id:'15215125125', photos:{small:null}, followed:true},
            {name:'sasha', id:'152151255', photos:{small:null},followed:false},

          ],
    pageSize: 3,
    isFetching:true,
    totalUsersCount: 30,
    currentPage:1, 
    isFollowed: true,
    followingProgress: [],
    communityMembers:[
        {name:'sveta', id:'3214', photos:null, groupIndex:null},
        {name:'vasya', id:'2341', photos:null, groupIndex:null},
    ]
    
}

const friendListReducer = (state=initialState, action) => {


    
    switch(action.type){
        case 'SET-COMMUNITY-MEMBERS':
            return {
                ...state,
                communityMembers: action.users
            };

        case 'SET-COMMUNITY-MEMBERS':
            return {
                ...state,
                communityMembers: action.users
            };

        case 'SET-FRIENDS': 
            return {
                ...state,
                users: action.users
            };

        case 'SET-FRIENDS': 
            return {
                ...state,
                users: action.users
            };

        case 'SET-CURRENT-PAGE':
            return{
                ...state,
                currentPage:action.currentPage
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'FOLLOW':
            return{
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return{...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return{...u, followed: false}
                    }
                    return u;
                })
            }
        case 'FOLLOWING-IN-PROGRESS':
            return{
                ...state,
                followingProgress: action.followingProgress
                ? [...state.followingProgress,action.userId]
                : state.followingProgress.filter(id=>id!=action.userId)
            }
            default: return state;
            
    }
    
       
}

export const setCommunityMembers = (users)=> ({type:'SET-COMMUNITY-MEMBERS', users});


const getUsersThunkCreator = async (dispatch,pageSize,currentPage,actionCreator)=> {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        const response = await getUsers(pageSize, currentPage)
            dispatch(actionCreator(response.items))
            dispatch(toggleIsFetching(false));
}

export const setFriendsThunk = (pageSize,currentPage)=> async (dispatch)=>{
    const actionCreator = setFriends;
    getUsersThunkCreator(dispatch, pageSize, currentPage, actionCreator)
}


export const setCommunityMembersThunk = (pageSize,currentPage)=> async (dispatch)=>{
    const actionCreator = setCommunityMembers;
    getUsersThunkCreator(dispatch, pageSize, currentPage, actionCreator)
}

export const unfollowThunkCreator = (id)=> async (dispatch)=> {
        dispatch(followingInProgress(true, id));
        let response = await unfollowUser(id);
        if (response.resultCode === 0)
            {dispatch(unfollow(id))}
         dispatch(followingInProgress(false, id))
}

export const followThunkCreator = (id)=> async (dispatch)=> {
        dispatch(followingInProgress(true, id));
        let response = await followUser(id)
        if(response.resultCode===0)
            {
                dispatch(follow(id))
            }
        dispatch(followingInProgress(false, id))   
}

export default friendListReducer;

