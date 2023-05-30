
import React ,{useState} from "react";
import Card from "../Ui/Card";
import classes from './AddUsers.module.css';
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
const AddUsers = (props)=>{
    const [username , setUsername] = useState('')
    const [age , setAge] = useState('');
    const [error , setError] = useState('')

    const itemhandler = (event) =>{
          event.preventDefault()
          if(username.trim().length===0 || age.trim().length===0){
            setError({
                title: 'Invalid input',
                message:'Please enter a valid name and age'
            })
            return;
          }
          if(+age<1){
            setError({
                title: 'Invalid age',
                message:'Please enter a valid age > 0'
            })
            return;
          }
          props.onAddUser(username , age);
          setUsername('')
          setAge('')
          
    }
    const usernamehandler=(event)=>{
        setUsername(event.target.value)
    }
    const Agehandler=(event)=>{
        setAge(event.target.value)
    }
    const errorHandler=()=>{
        setError(null);
    }
     return(
        <>
        {error && <ErrorModal title = {error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className ={classes.input}>
            <form onSubmit={itemhandler}>
                <label htmlFor="username">Username</label><br/>
                <input id="username" type="text" value={username} onChange={usernamehandler}/><br/>
                <label htmlFor="age">Age(Years)</label><br/>
                <input id="age" type="number" value={age} onChange={Agehandler}/>
                <Button type='submit'>Add User</Button>
            </form>
            
        </Card>
        </>
     )
}
export default AddUsers;