import CHANGE_REVIEW_ACTION_CREATOR from '../actionCreators/reviewActionCreator'
import ADD_REVIEW_ACTION_CREATOR from '../actionCreators/addReviewActionCreator'
import ADD_LIKE_ACTION_CREATOR from '../actionCreators/addLikeActionCreator'
import {createID} from '../helpers'

let initialState = {
    bookShopList: [
        {writer:'Jack London', name:'White Fang', price:'', description:'', coverURL:'https://images-na.ssl-images-amazon.com/images/I/71RBCKGJ75L.jpg',id:'1'},
        {writer:'Rey Bradbury', name:'Fahrenheit 451', price:'', description:'', coverURL:'https://nemaloknig.com/picimg/57/572/5720/57208/cover.jpg',id:'2'},
        {writer:'Francis Scott Fitzgerald', name:'Great Gatsby', price:'', description:'', coverURL:'https://i2.rozetka.ua/goods/17111527/188177186_images_17111527882.jpg',id:'3'},
        {writer:'Ernest Hemingway', name:'The old man and the sea', price:'', description:'', coverURL:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5328/9781532860782.jpg',id:'4'},
        {writer:'Howard Phillips Lovecraft', name:'The Call of Cthulhu', price:'', description:'', coverURL:'https://m.media-amazon.com/images/I/419M3XJ5ORL.jpg',id:'5'}
    ],
    reviewList: [
        {userName:'Dodik1', date:'24.07.2020', likesCount:4, recomendations:'Recomend for buy', reviewText:'Это та самая классика, от которой невозможно оторваться. Ради которой хочется бросить все свои дела и бежать читать, читать и читать. Наслаждаешься слогом, сюжетом и атмосферой дикой природы, чувствами, ощущениями.',id:'11111123123'},
        {userName:'Dodik2', date:'24.07.2020', likesCount:4, recomendations:'Recomend for buy', reviewText:'norm',id:'1213123'},
        {userName:'Dodik3', date:'24.07.2020', likesCount:3, recomendations:'Recomend for buy', reviewText:'norm',id:'1152125512'},
        {userName:'Dodik4', date:'24.07.2020', likesCount:2, recomendations:'Ne Recomend', reviewText:'tema sisek ne rasrkita',id:'141241412'},
        {userName:'Dodik5', date:'24.07.2020', likesCount:3, recomendations:'Recomend for buy', reviewText:'norm',id:'1512152152'},
    ],
    reviewText: 'работає',
}


let a = initialState.reviewList.likesCount


const booksStoreListReducer = (state=initialState, action, a)=>{
    switch(action.type){
        case 'CHANGE-REVIEW':
            return{
                ...state,
                    reviewText:action.newReview,
                    
            }
        case 'ADD-REVIEW':

            let newReview = {
                userName:'newDodik', 
                date:'24.07.2020', 
                likesCount:0, 
                recomendations:'Recomend for buy', 
                reviewText: state.reviewText, 
                id: createID()
            }
            return {
                ...state,
                reviewList: [newReview, ...state.reviewList
                ],
                reviewText:''
            }

        case 'ADD-LIKE-TO-COMMENT':
            return {
                ...state,
                reviewList: state.reviewList.map(l=> {
                    if (l.id===action.commentId) {
                        return {...l, likesCount: l.likesCount+1}
                    }
                    return l;
                })

            }
            default: return state;
    }
    
}
export default booksStoreListReducer;




// const selectedReview = state.reviewList.find(item=>item.id===action.commentId)
//             selectedReview.likesCount=selectedReview.likesCount+1;
//             const newReviewList = state.reviewList.filter(item=>item.id!==action.commentId)
//             return {
//                 ...state,
//                 reviewList: [selectedReview, ...newReviewList]

                
            
//             };