export const ADD_POST_ACTION_CREATOR = () => {
    return {type:'ADD-POST'}
 };

 export const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = (newText) => {
    return {type:'UPDATE-NEW-POST-TEXT',
            newText: newText}
 };

let initialState = {
    comments:[
        {name: 'gosha', date:'20/05/18', content: 'Yep'},
        {name: 'Patya', date:'21/05/18', content: 'kek'},
        {name: 'vasa', date:'22/05/18', content: 'Cheburek'},
        {name: 'Sveta', date:'23/05/18', content: 'Lol'},
        {name: 'Oksana', date:'24/05/18', content: 'Arbidol'}
    ],
    newPostText: ''
}

const commentReducer = (state=initialState, action) => {
    switch(action.type){
        // case 'ADD-POST': 
        //     return {
        //         ...state,
        //         comments: [...state.comments, {
        //             name: 'new',
        //             date: '09.12.2019',
        //             content: state.newPostText
        //         }],
        //         newPostText: ''

        //     };
        // case 'UPDATE-NEW-POST-TEXT': {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }       
            
        // }
        case 'ADD-PAGE-COMMENT': {
            debugger;
            return {
                ...state,
                comments: [...state.comments, {
                    name: action.login,
                    date: '09.12.2019',
                    content: action.FormData.messageText
                }],
            }       
            
        }
        
        default:
            return state;
    }
     
}
export default commentReducer;