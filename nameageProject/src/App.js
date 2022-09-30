import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import users from './users';


function App() {

  const [newUser,setNewUser]=useState(users)

  function AddNewUser(user){
    setNewUser((prevUsers)=>{
      return [user, ...prevUsers]
    })
  }

  return (
    <>
        <AddUser onAddUser={AddNewUser}/>
        <UserList expens={newUser}/>   
    </>
  );
}

export default App;
