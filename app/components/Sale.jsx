'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Sale() {


    const [days , setday]= useState()
    const [hours , sethours]= useState()
    const [minutes , setminutes]= useState()
    const [seconds , setseconds]= useState()
    const [allowed , setallowed] = useState()
    const [dater , setdateer] = useState()




    useEffect(() => {



 
      setInterval(() => {

        
        const getdatefunc = async() => {
          const getdate = await axios.get("http://localhost:4000/getsaledate")
   
     
     
     
          
     


                    const date1 = new Date(getdate.data[0].date)


        const date2 = new Date()

        const difference = new Date(date1 - date2)


        if(difference > -0){
          setallowed(true)



             setday(Math.floor(difference / (1000 * 60 * 60 * 24)))
             sethours(Math.floor((difference / (1000 * 60 * 60)) % 24))
             setminutes(Math.floor((difference / 1000 / 60) % 60))
             setseconds(Math.floor((difference / 1000) % 60))




            

        }else{
          setallowed(false)
        }
      }
      getdatefunc()
      }, 1000);
      

        

    },[])

    if(allowed == false){

      return(
        null
      )

    }else{

    

  return (


    <div className="sale">

    <div className="saleframe">
      <div className="timer flex align-center justify-center gap-8">

      <div className="days text-white flex items-center justify-center gap-3 "><div className="value">{days}</div> <div className="tittle">Days</div></div>
      <div className="days text-white flex items-center justify-center gap-3 "><div className="value">{hours}</div> <div className="tittle">Hours</div></div>
      <div className="days text-white flex items-center justify-center gap-3 "><div className="value">{minutes}</div> <div className="tittle">Minutes</div></div>
      <div className="days text-white flex items-center justify-center gap-3 "><div className="value">{seconds}</div> <div className="tittle">Seconds</div></div>

      </div>
      <div className="items">
        

      </div>
    </div>

   </div>

  )
}
}
