
let initialState = {
    books: [
        {name: 'Witcher: The last wish', date:'20/05/18', content: 'Yep', id:'12223', coverURL:'https://upload.wikimedia.org/wikipedia/en/1/14/Andrzej_Sapkowski_-_The_Last_Wish.jpg'},
        {name: "Harry Potter and the Philosopher's Stone", date:'20/05/18', content: 'Yep', id:'23324', coverURL:'https://tsp-books.com/upload/cache/__WIN2012_Images_9781408855652_420x628.jpg'},
        {name: 'Atlas shrugged II', date:'', content: 'Yep', id:'34241', coverURL:'https://my-hit.org/storage/284110_500x800x250.jpg'},
        {name: 'Гарри Поттер и методы рационального мышления', date:'20/05/18', content: 'Yep', id:'21313', coverURL:'https://cs10.pikabu.ru/post_img/big/2019/06/20/9/1561039464148061891.jpg'},
        {name: 'Гарри Поттер и методы рационального мышления', date:'20/05/18', content: 'Yep', id:'21313', coverURL:'https://cs10.pikabu.ru/post_img/big/2019/06/20/9/1561039464148061891.jpg'},
        {name: 'Гарри Поттер и методы рационального мышления', date:'20/05/18', content: 'Yep', id:'21313', coverURL:'https://cs10.pikabu.ru/post_img/big/2019/06/20/9/1561039464148061891.jpg'},
        {name: 'Гарри Поттер и методы рационального мышления', date:'20/05/18', content: 'Yep', id:'21313', coverURL:'https://cs10.pikabu.ru/post_img/big/2019/06/20/9/1561039464148061891.jpg'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},
        {name: 'g', date:'20/05/18', content: 'Yep', id:'14124', coverURL:'http://placekitten.com/g/204/500'},

    ],
    pageSize: 6,
    totalBooksCount: 3,
    currentPage: 1,
}

const booksListReducer = (state=initialState, action)=>{
    return state;
}
export default booksListReducer;