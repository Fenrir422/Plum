
let initialState = {
    fragments: [
        {book: 'LOTR', writer:'Tolkien', group:'fantasy', content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date:'10.10.10'},
        {book: 'Dark Elf', writer:'Salvatore', group:'fantasy', content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date:'11.10.10'},
        {book: 'LOTR', writer:'Tolkien', group:'fantasy', content:'somecontent2', date:'10.10.10'},
        {book: 'LOTR', writer:'Tolkien', group:'fantasy', content:'somecontent3', date:'10.10.10'},
        {book: 'LOTR', writer:'Tolkien', group:'fantasy', content:'somecontent4', date:'10.10.10'},
    ]
}

const fragmentReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD-FRAGMENT':
            return{
                ...state,
                fragments:[...state.fragments, {
                    book: 'HP', 
                    writer:'hz', 
                    group:'fantasy', 
                    content: action.fragment
                }]
            }
    }
    
    return state;
}


export const addFragment = (fragment)=> ({type:'ADD-FRAGMENT', fragment});


export default fragmentReducer;