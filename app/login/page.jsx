'use client'



import axios from 'axios'
import React, { useState } from 'react'
import jwt from 'jsonwebtoken'
import cook from 'js-cookie'






export default function page() {
    const [username , setusername] = useState()
const [password , setpassword] = useState()
const [user , setuser] = useState()
const [token , settoken] = useState()


const login = async() => {
    const res = axios.post('http://localhost:4000/login', {username, password})
    const user = (await res).data 
    console.log(user)

    const decoded = jwt.decode(user.accestoken)
    console.log(decoded.exp)

    cook.set('JWT' , user.accestoken  ,{


      expires:new Date(decoded.exp * 1000)

   })
}

  return (
    <div className="login">
        <input onChange={(e) => setusername(e.target.value)} type="text" placeholder='Username' />
        <input onChange={(e) => setpassword(e.target.value)} type="text" placeholder='password' />
        <a onClick={() =>  login()} >Submit</a>
    </div>
  )
}
