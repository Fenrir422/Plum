import React from 'react';
import classes from './Friends.module.css';
import FriendProfileContainer from '../../../containerComponents/FriendProfileContainer';
import ifNull from '../../../images/ifNull.png'
import { NavLink, Route} from 'react-router-dom';
import Loader from '../../common/FormControl/Loader/Loader';




const Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i)
    }

    return (   
    <div className={classes.wrapper}>
      <div>
      <div className={classes.paginator}>
          {pages.map (p=> 
            <span 
              data-page={p}
              className={props.currentPage == p ? classes.selectedPage:classes.page}
              onClick={()=> props.onPageChanged(p)}
            >
              {p}&nbsp;
            </span>
          )}
        </div>
        <div className={classes.friendWrapper}>  
        {props.users.map(u=>(
            <div>
              <div>Name: {u.name}</div>
              <NavLink to={'/friends/more/'+ u.id}>
                  <div><img src={u.photos.small ? u.photos.small : ifNull} className={classes.image} /></div>
              </NavLink>
              <div> 
                <div>{u.groupIndex}</div>
                {u.followed 
                  ?
                  <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={()=>{
                    props.unfollowThunk(u.id);
                  }}>
                    unfollow
                  </button>
                  :
                  <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={()=>{
                    props.followThunk(u.id)
                  }}>
                    follow
                  </button>
                }
              </div>
            </div>
        ))
        }
        </div>
      </div>
      {props.isFetching? <Loader loaderCenter={false}/> : null}

      <div>
        
      </div>
      <div className={classes.friendProfile}>
        <Route exact path='/friends/more/:id' render={(props1) =><FriendProfileContainer props={props} />}/>
      </div>
    </div>
    );
  }

export default Friends;
