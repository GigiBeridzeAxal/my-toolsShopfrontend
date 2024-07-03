'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Footer() {
    const [search ,setsearch] = useState('')
  return (
  <><hr /> 
     <br /><br /><br />   <br /><br /><br />
  <div className="footer">
    <div className="footerbody">

     
     <div className="logo"><img width={300} src="PowerToolPlaza.png" alt="" /></div>

    
    <div className="footertittle">ეს პროექტი არის დამზადებული <a className='text-blue-500' href="">გიგი ბერიძე-ს</a> მიერ პროექტი არის პორტფოლიოს მიზნის 
    
    </div>

    </div>

    
   </div>  
   <br /><br /><br /><br /><br /><br />
     <div className="foot">
     <div className="logo"><img width={200} src="PowerToolPlaza.png" alt="" /></div>
     <div className="centerline"><div className="copyright text-black"> All Rights Served 2024 <img width={30} src="cpr.png" alt="" /></div></div>
     <div className="endline gap-3 flex align-center"><a href="/github"><img  width={35} src="Github.png" alt="" /></a>
     <a href="/github"><img  width={35} src="Linkedin.png" alt="" /></a>
     </div>
     </div>
     </>
  )
}
