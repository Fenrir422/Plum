

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


    users: [
        {name:'gosha', id:'1234', photos:'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg', group:'4'},
        {name:'sveta', id:'3214', photos:'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg', group:'4'},
        {name:'vasya', id:'2341', photos:'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg', group:'3'},
        {name:'misha', id:'2314', photos:'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg', group:'3'},
        {name:'vovan', id:'3241', photos:'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg', group:'4'},

    ],

    currentPage: null,
    pageSize:null

}

const communitiesReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET-USERS': 
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
     
}

export default communitiesReducer;
