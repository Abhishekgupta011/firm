import React from "react";
import Card from "../Ui/Card";
import classes from './UserList.module.css'
const UserList = (props) =>{
     return(
     <Card className={classes.users}>
     <ul>
        {props.users.map((user) =>
        <li key={user.id}>
            {user.name}&nbsp;
            ({user.age} years old)&nbsp;
            {user.cName}
        </li>)}
     </ul>
     </Card>
     )
}
export default UserList;