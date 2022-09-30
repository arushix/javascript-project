import './AddUser.css'
import Button from '../UI/Button'
import Card from '../UI/Card'
import { useState,useRef } from 'react'
import ErrorModel from '../UI/ErrorModel'
import Wrapper from '../Helpers/Wrapper'

function AddUser(props){

    const entNameRef=useRef()
    const entAgeRef=useRef()
    // const [entName,setEntName]=useState('')
    // const [entAge,setEntAge]=useState('')
    const [error,setError]=useState(false)

    const [title,setTitle]=useState('')
    const [message,setMessage]=useState('')
    

    function addUserHandler(event){
        event.preventDefault()
        const entName=entNameRef.current.value
        const entAge=entAgeRef.current.value
        //console.log(nameInputRef)

        if(entName.trim().length === 0 ||
            entAge.trim().length === 0){
                setError(true)
                setTitle('input galat')
                setMessage('dono me kuch bharo')
                return

        }

        if(+entAge < 1){
            setError(true)
            setTitle('age galat')
            setMessage('0 se zyada')
            return
        }

        const info={
            id:Math.random(),
            name:entName,
            age:entAge
        }

        props.onAddUser(info)
        entNameRef.current.value=''
        entAgeRef.current.value=''


        //console.log(info)
        // setEntName('')
        // setEntAge('')
    }

    // function nameHandler(event){
    //     setEntName(event.target.value)
    // }

    // function ageHandler(event){
    //     setEntAge(event.target.value)
    // }

    function errorbutton(){
        setError(false)
    }

    return(
        <Wrapper>
        {error && <ErrorModel 
                    title={title}
                    message={message}
                    close={errorbutton}/>}

        <Card className='input'>
            <form onSubmit={addUserHandler}> 
        
                <label htmlFor='username'>name</label>
                
                <input 
                       id='username' 
                       type='text'
                       ref={entNameRef}></input>

                <label htmlFor='age'>age</label>

                <input 
                       id='age' 
                       type='number'
                       ref={entAgeRef}></input>

                <Button type='submit'>add</Button>
        
            </form>
        </Card>
        </Wrapper>
        

    )
}

export default AddUser