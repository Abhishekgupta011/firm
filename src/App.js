
import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";
const App = ()=>{
    const [userlist , setUserList] = useState([])
    const addUserHandler = (username , age)=>{
        setUserList((prevUsers)=>{
            return [...prevUsers , {name: username , age: age , id:Math.random().toString()}]
        })
    }
    return(
        <>
            <AddUsers onAddUser={addUserHandler}/>
            <UserList users={userlist}/>
        </>
    )
}
export default App;