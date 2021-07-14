import { connect } from 'react-redux';
import { compose } from 'redux';
import BooksWrapper from '../components/page-holder/Books/Bookswrapper/BooksWrapper';
import { withNoAuthRedirect } from '../hoc/AuthRedirect';





let mapStateToProps = (store) => {
    return {
        books: store.booksStore.books,
        pageSize: store.booksStore.pageSize,
        totalBooksCount: store.booksStore.totalBooksCount,
        currentPage: store.booksStore.currentPage,  
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};



export default compose (
    connect (mapStateToProps, mapDispatchToProps),
    withNoAuthRedirect
)(BooksWrapper)
// let AuthRedirectComponent = withAuthRedirect (BooksWrapper);


// const BooksWrapperContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);


// export default BooksWrapperContainer;
