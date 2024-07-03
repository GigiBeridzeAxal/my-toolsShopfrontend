'use client'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useJwt } from 'react-jwt'
import axios from 'axios'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Header() {

    const [messages , setmessages] = useState(['loading'])
    const router = useSearchParams();
    const categoryer = router.get('category')


        



    const  [messageopened , setmessageopened] = useState(false)
    const [cartlengt , setcartlengt] = useState(() => {
        const savedcart = JSON.parse(localStorage.getItem('cart'))
         return savedcart ? savedcart  : 0

    }



    )



   setInterval(() => {
    setcartlengt(JSON.parse(localStorage.getItem('cart')))
   }, 1000);


    useEffect(() => {

        setcartlengt(JSON.parse(localStorage.getItem('cart')))


        const getmessages = async() => {

            const data = await axios.get('https://my-toolsshopbackend.onrender.com/getMessages')
            setmessages(data.data)
            console.log(data.data.length)
            console.log(data.data)


        }
        getmessages()
        

    
 

    },[])

    const changemessageopened = () => {
        if(messageopened == true){
            setmessageopened(false)
        }else{
            setmessageopened(true)
        }
    }
    const [search , setsearch] = useState('')



  return (
    <div className="header bg-gray-900">

        <div className="headerframe">

       

       
            <a href='/' className="logo"><img src="/PowerToolPlaza.png" width={250} alt="" /></a>
            <div className="searchforheader">
                <input onChange={(e) => setsearch(e.target.value)} type="text" placeholder='ძიება..' /><Link href={
                          {pathname:`/search`,
                          query:{
                            productname:search,
                            category:categoryer == '' ? '' : categoryer 
                          }
                }} className='bg-green-400'><img src={'/Search.png'} width={25} alt="" /></Link>
            </div>
                <div className="sections flex align-center justify-center gap-7">
                    <div className="categorie relative">

                        <a href='/cart' ><img src="/Buying.png" width={30} alt="" /> <div className="cartlength bg-green-500">{cartlengt ? cartlengt.length : 0}</div>  <div className="infoer">კალათა</div></a> </div>
                    <div className="categorie informator relative">
                        {messages.length >= 1 ? <div className='messageslength bg-red-500 text-white' >+{messages.length}</div> : <div></div>}
                        <a className='cursor-pointer' onClick={() => changemessageopened()} ><img src="/Email.png" width={30} alt="" /> <div className="infoer">ჩემი შეტყობინებები</div></a>
                        {messageopened === true ?  <div className=" bg-white messagelist gap-3"> <div className="messagetittle text-gray-500 ">Message List</div>
                        {messages.length >= 1 ?    messages.map(data => (
                            <>
                           
                            <div className="messagebox  flex gap-3">
                                <div className="messagelogosectio flex">
                                    <div className="messageprofile"><img src="maleuser.png" width={35} alt="" /></div>
                              
                                </div>     
                                <div className="msg">
                                      <div className="system text-gray-500">System</div>
                                <div className="systememssage text-gray-500 bg-gray-100 p-3">
                                    {data.message}</div>
                            </div>
                                </div>
                              
                            </>
))  :    
<>


<div className="messagebox flex gap-3">
   
    <div className="messagenotfound  p-3">ახალი შეტყობინება არ მოიძებნა</div>
</div>
</>
 }
                        </div> : <div></div>}
                       
                       

                    </div>
         

            

                    <div className="categorie Sesvla "><a href='/login' className='Connectbtn flex items-center justify-center' ><img src="/User.png" width={30} alt="" /> შესვლა </a></div>                    
                    <div className="categorie burger"><button><img width={30} src="Menu.png" alt="" /></button></div>
                </div>
            </div>
        </div>

  )
}

