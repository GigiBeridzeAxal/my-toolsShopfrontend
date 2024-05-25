'use client'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useJwt } from 'react-jwt'

export default function Header() {

    const token = Cookies.get('JWT')
    const {isExpired} = useJwt(token , "Sekretai")


    const [user , setuser] = useState(jwt.decode(token , "Sekretai"))


    useEffect(() => {
        

    
    if(token){
      



        console.log(user , isExpired)


    }else{
        "You Are Not Logined"
    }

    },[])

  return (
    <div className="header bg-gray-50">
        <div className="headerframe">
            <div className="left">
                <div className="logo"><img src="/PowerToolPlaza.png" width={250} alt="" /></div>
            </div>
            <div className="right">
                <div className="sections flex align-center justify-center gap-7">
                    <div className="categorie"><img src="/Buying.png" width={30} alt="" /></div>
                    <div className="categorie"><img src="/Email.png" width={30} alt="" /></div>
            

                    <div className="categorie "><a href='/login' className='Connectbtn flex items-center justify-center' ><img src="/Customer.png" width={30} alt="" /> შესვლა </a></div>                    
                </div>
            </div>
        </div>
    </div>
  )
}
