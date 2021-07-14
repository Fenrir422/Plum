import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import Page from './components/page-holder/Page/Page';
import Books from './components/page-holder/Books/Books'
import CommunitiesWrapper from './components/page-holder/Communities/CommunitiesWrapper'
import FriendsContainer from './containerComponents/FriendsContainer'
import {Route} from "react-router-dom";
import BookShop from './components/page-holder/Store/BookShop';
import HeaderContainer from './containerComponents/HeaderContainer';
import LoginContainer from './containerComponents/LoginContainer'
import ProfileContainerWithUrl from './containerComponents/ProfileContainer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initialaizeThunk} from './reducers/appReducer'
import Loader from './components/common/FormControl/Loader/Loader';
import Poligon from './components/page-holder/Poligon/Poligon'





class App extends React.Component {


  componentDidMount() {
    this.props.initialaizeThunk()
  }

  componentDidUpdate() {
  }
  render () {
    if (!this.props.initialaized){
      return <Loader loaderCenter={true}/>
    }
    return (
      <div className="App">
        <HeaderContainer/>
        <div className="app-wrapper">
          <Sidebar />
          <Route path='/books' render = {()=> <Books /> }/>
          <Route path='/page' render = {()=> <Page />}/>
          <Route path='/communities' render = {()=> <CommunitiesWrapper />}/>
          <Route path='/store' render ={()=> <BookShop/>}/>
          <Route path='/friends' render ={()=><FriendsContainer />}/>
          <Route path='/login' render={()=><LoginContainer />}/>
          <Route path='/profile/:userId?' render={()=><ProfileContainerWithUrl />}/>
          <Route path='/poligon' render={()=><Poligon />}/>
          
        </div>
      </div>
    );
  }

}

const mapStateToProps =(store)=>{
  return{
    initialaized: store.appStore.initialaized
  }
}

export default compose(
  connect (mapStateToProps, {initialaizeThunk})(App),
)


// export default compose(
//   ,
//   connect (null,{})(App)
// )

