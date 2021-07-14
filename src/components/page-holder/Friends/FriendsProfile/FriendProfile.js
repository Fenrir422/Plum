import React from 'react';
import ProfileElement from './ProfileElement'
import ifNull from '../../../../images/ifNull.png'
import { NavLink} from 'react-router-dom';




const FriendProfile = (props) => {
  const id = +props.match.params.id
  const selectedUser = props.users.find(u => u.id === id)
  // if (!selectedUser) return null;
  return (      
    <div >
      <img src={selectedUser && selectedUser.photos && selectedUser.photos.small ? selectedUser.photos.small : ifNull} />
      {selectedUser && selectedUser.name}
      {/* {selectedUser.name} */}
      {selectedUser && selectedUser.id}
      {/* {selectedUser.id} */}
      <NavLink to={'/profile/'+ id}> show more </NavLink>
    </div>
  )
};

export default FriendProfile;

