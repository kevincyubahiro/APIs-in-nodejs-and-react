import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Insert = () => {
     const[username,setUsername]=useState('')
     const[password,setPassword]=useState()
     
     const handlesubmit=(e)=>{
        e.preventDefault();
        if(!username || !password){
            alert("Please fill all the fields")
            return;

     }
     axios.post('http://localhost:2000/insert',{
        username,password
     })
     .then(res=>{
        alert('inserted')
     })
     .catch(err=>{
        console.log('failed')
     })
    }
  return (
    <div>
      <form  onSubmit={handlesubmit}>
        <input type="text"  value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type="text"  value={password} onChange={e=>setPassword(e.target.value)}/>
        <button type='submit'>login</button>
      </form>
    </div>
  )

}
export default Insert;
