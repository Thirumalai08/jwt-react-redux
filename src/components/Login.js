import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
//import { useHistory } from 'react-router-dom'
import {signin} from '../actions/userActions'

function Login(props){
    //const history = useHistory()
    const dispatch = useDispatch()
    const [data,setData] = useState({
        email:'',
        password:''
    })
    // from redux store
    const handleSubmit = (event) => {
        event.preventDefault()
        //dispatch
        dispatch(signin(data.email,data.password))
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a Email"
            //name="" 
            value={data.email}
            onChange={(event)=>setData({...data,email:event.target.value})}
            /><br />
            <input type="password" placeholder="Enter a Password"
            //name="" 
            value={data.password}
            onChange={(event)=>setData({...data,password:event.target.value})}
            /><br />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login