

let initialState = {
    CommunityGroups:[
        {GroupName: 'University', id:'1124125', group:'1'},
        {GroupName: 'Me and wife', id:'2124124', group:'2'},
        {GroupName: 'Lovecraft fans', id:'323124', group:'3'},
        {GroupName: 'Anatomy', id:'4124124', group:'4', photo:'http://makelsan.com.ua/wp-content/uploads/2018/01/Vitruvian-Man-00.jpg'}
    ],
    GroupOneUnits: [
        {Name:'Infection course', members:null, newMessages:'2'},
        {Name:'Anatomy', members:null, newMessages:'1'},
    ],
    GroupTwoUnits: [
        {name: 'Life of Pi', members:null, newMessages:'22'}
    ],

    currentPage: null,
    pageSize:null,
    lalka:null
}

const communitiesReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET-USERS': 
            return {
                ...state,
                users: action.users
            };
        case 'SET-GROUP-MEMBERS':
            return {
                ...state,
                sortedGroupMembers: action.users
            };
        default:
            return state;
    }
     
}


export default communitiesReducer;


