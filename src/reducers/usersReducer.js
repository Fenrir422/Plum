import toggleIsFetching from '../actionCreators/FetchingAC'
import setCurrentPage from '../actionCreators/setCurrentPageAC'
import setFriends from '../actionCreators/setFriendsAC'
import followingInProgress from '../actionCreators/FollowingInProgress'
import followToggleAC from '../actionCreators/followToggleAC'
import { getUsers, unfollowUser, followUser } from '../api/api'
import {groupBy} from 'lodash';


/////USERS STATE


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
    ],
    sortedMembers:{}
        
    
}

const usersReducer = (state=initialState, action) => {

    switch(action.type){
        case 'SET-FRIENDS': 
            return {
                ...state,
                users: action.users
            };
        case 'SET-COMMUNITY-MEMBERS': 
            return {
                ...state,
                communityMembers: action.users
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
        case 'FOLLOW-TOGGLE':
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return{...u, followed: !u.followed}
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

        // BLINDPLUG for sorting group-member to groups(1-5) 
        case 'SORTING-GROUP-MEMBERS':
            return {
                ...state,
                communityMembers: state.communityMembers.map( member => {
                    return{...member, groupIndex: getRandomInt(1, 5)
                    }
                })
            }
        case 'SORTING-GROUP-MEMBERS2':
            return {
                ...state,
                sortedMembers : groupBy(state.communityMembers, 'groupIndex')
            }
            // {
            //     ...state,
            //     sortedMembers: state.communityMembers.map( member => {
            //         return{members: groupBy(state.communityMembers, 'groupIndex')
            //         }
            //     })
            // }  
        default: return state;      
    }      
}


const getRandomInt =(min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



export const setCommunityMembers = (users)=> ({type:'SET-COMMUNITY-MEMBERS', users});
export const sortingGroupMembers = ()=> ({type:'SORTING-GROUP-MEMBERS', getRandomInt});
export const groupSortingGroupMembers = ()=> ({type:'SORTING-GROUP-MEMBERS2'});



// САНКИ----САНКИ----САНКИ----САНКИ----САНКИ

export const setFriendsThunk = (pageSize,currentPage)=> async (dispatch)=>{
    const actionCreator = setFriends;
    getUsersThunkCreator(dispatch, pageSize, currentPage, actionCreator)
}

export const setCommunityMembersThunk = (pageSize,currentPage)=> async (dispatch)=>{
    const actionCreator = setCommunityMembers;
    let sorting = true; 
    getUsersThunkCreator(dispatch, pageSize, currentPage, actionCreator, sorting)
}

const getUsersThunkCreator = async (dispatch,pageSize,currentPage,actionCreator, sorting)=> {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage))
    const response = await getUsers(pageSize, currentPage)
        dispatch(actionCreator(response.items))
        dispatch(toggleIsFetching(false));
        if (sorting = true) {
            dispatch(sortingGroupMembers())
            dispatch(groupSortingGroupMembers())
        }
}

//FOLLOW-THUNK----FOLLOW-THUNK----FOLLOW-THUNK

export const followThunkCreator = (id) => async(dispatch)=> {
    const foollowToggleApi = followUser;
    followToggleThunk(dispatch, id, foollowToggleApi)
}

export const unfollowThunkCreator = (id) => async(dispatch)=> {
    const foollowToggleApi = unfollowUser;
    followToggleThunk(dispatch, id, foollowToggleApi)
}

const followToggleThunk = async(dispatch, id, foollowToggleApi)=> {
    dispatch(followingInProgress(true, id));
    let response = await foollowToggleApi(id);
        if (response.resultCode === 0) {
            dispatch(followToggleAC(id))
        }
         dispatch(followingInProgress(false, id))
}


// export const unfollowThunkCreator = (id)=> async (dispatch)=> {
//     dispatch(followingInProgress(true, id));
//     let response = await unfollowUser(id);
//     if (response.resultCode === 0)
//         {dispatch(unfollow(id))}
//      dispatch(followingInProgress(false, id))
// }

// export const followThunkCreator = (id)=> async (dispatch)=> {
//     dispatch(followingInProgress(true, id));
//     let response = await followUser(id)
//     if(response.resultCode===0)
//         {
//             dispatch(unfollow(id))
//         }
//     dispatch(followingInProgress(false, id))   
// }

export default usersReducer;

