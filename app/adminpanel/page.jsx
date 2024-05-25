'use client'
import Cookies from 'js-cookie'

import React, { useState } from 'react'

export default function page() {


    const [username , setusername] = useState()
    const [password , setpassword] = useState()

    const changepassword = (e) => {
        setpassword(e.target.value)

    }
    const changeusername = (e) => {
        setusername(e.target.value)


    }

    const connect = () => {

        if(username !== process.env.NEXT_PUBLIC_ADMINNAME || password !== process.env.NEXT_PUBLIC_ADMINPASSWORD){
              console.log("Field Is Not Valid")
        }else{
            console.log("Setting")
            Cookies.set("Admin", process.env.NEXT_PUBLIC_ADMINPASSWORD , {
                expires:0.1
            } )
        }

    }

    if(!Cookies.get('Admin')){

        setTimeout(() => {
             return(         
            <>
            <div className="logo"><img src="/PowerToolPlaza.png" width={250} alt="" /></div>
            <div className="adminlogin flex items-center justify-center">

                <div className="adminloginframe">
                    <div className="adminpaneltittle flex items-center justify-center">Admin Panel</div>
                    <input onChange={(e) => changeusername(e)} type="text" placeholder='შეიყვანე ადმინის სახელი' />
                <input onChange={(e) => changepassword(e)} type="text" placeholder='შეიყვანე ადმინის პაროლი' />
                <a href='/adminpanel' onClick={() => connect()} className='bg-emerald-500'>შესვლა</a>
                </div>
                
            </div>
            </>                     
             
        )
        }, 2500);
       
    }
        


        
        

  
  const accesscontroler = Cookies.get('Admin')
    if(accesscontroler === process.env.NEXT_PUBLIC_ADMINPASSWORD){
      


        return(         
            <>
          <div className="admin">
            <div className="adminpanel">
                <div className="leftpanel">
                    <div className="bar">
                    <div className="logo"><img src="/PowerToolPlaza.png" width={250} alt="" /></div>
                    <br />
                    <div className="sectionspanel">
                        


                    </div>
                    </div>
                </div>
                <div className="rightanswer"></div>

            </div>
          </div>
            </>                     
             
        )

    }



 
}
