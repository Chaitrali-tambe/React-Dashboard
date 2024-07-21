import React from 'react'
import Users from '../components/users/Users'
const UserPage = () => {
  return (
    <div style={{height:'100vh'}}>
      <div className='header'>
        USERS
      </div>
      <Users/>
    </div>
  )
}

export default UserPage