import toggleIsFetching from '../actionCreators/FetchingAC'
import setCurrentPage from '../actionCreators/setCurrentPageAC'
import setFriends from '../actionCreators/setFriendsAC'
import followingInProgress from '../actionCreators/FollowingInProgress'
import follow from '../actionCreators/follow'
import unfollow from '../actionCreators/unfollow'
import { getUsers, unfollowUser, followUser } from '../api/api'
/////FRIENDS STATE


let initialState = {
    users:[{name:'gosha', id:'15215125125', photos:'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg',followed:true},
            {name:'sasha', id:'152151255', photos:{small:null},followed:false},

          ],
    pageSize: 3,
    isFetching:true,
    totalUsersCount: 30,
    currentPage:1, 
    isFollowed: true,
    followingProgress: []
}

const friendListReducer = (state=initialState, action) => {
    switch(action.type){
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


export const getUsersThunkCreator = (pageSize,currentPage)=> async (dispatch)=> {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        const response = await getUsers(pageSize, currentPage)
            dispatch(setFriends(response.items))
            dispatch(toggleIsFetching(false));
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

