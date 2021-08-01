import React from 'react'
import { connect } from 'react-redux'
import ProfileLibrary from '../components/page-holder/Books/ProfileLibrary/ProfileLibrary'




const mapStateToProps =(store)=>{
    return{
        LibraryItems:store.booksStore.books
    }
}

export default connect  (mapStateToProps, { } )(ProfileLibrary);