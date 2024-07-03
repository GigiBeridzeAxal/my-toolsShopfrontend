'use client'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Loading from './Loading'

export default function Sale() {



  const scrollref = useRef(null)
  
  const ismousedwn = (e) => {
    console.log(e.pageX)
    console.log(scrollref.current.offsetLeft)
    scrollref.current.scrollLeft = e.pageX - scrollref.current.offsetLeft 

  }



    const [days , setday]= useState()
    const [hours , sethours]= useState()
    const [minutes , setminutes]= useState()
    const [seconds , setseconds]= useState()
    const [allowed , setallowed] = useState()
    const [dater , setdateer] = useState()
    const [cartitemschanger , setcartitemschanger] = useState()
    const [raodenoba , setraodenoba] = useState({})
    const handletochange = (itemId , value) => {
      setraodenoba({
        ...raodenoba,
        [itemId]: value
      })
      console.log(raodenoba)

    }
    const [cartitems , setcartitems] = useState(() => {
      const savedcart = localStorage.getItem('cart')
      return savedcart ? JSON.parse(savedcart) : []
    })

   

    useEffect(() => {
      // Save cart items to localStorage whenever they change
      localStorage.setItem('cart', JSON.stringify(cartitems));

    }, [cartitems]);

  

    const addToCart = (itemId, amount) => {
      setcartitems(prevCartItems => {
        const prevCartItemser = JSON.parse(localStorage.getItem('cart'))

        const existingItemIndex = prevCartItemser.findIndex(item => item.id === itemId);
        if (existingItemIndex > -1) {
          // Update the existing item's amount
          const updatedCartItems = [...prevCartItemser];
         updatedCartItems[existingItemIndex].amount = amount;
          return updatedCartItems;
        } else {
          // Add new item to the cart

          return [...prevCartItemser, { id: itemId, amount}];
        }
      });
    };

    const [salelist , setsalelist] = useState(["loading.."])




    useEffect(() => {



 
      setInterval(() => {

        
        const getdatefunc = async() => {
          const getdate = await axios.get("https://my-toolsshopbackend.onrender.com/getsaledate")
          const getsale = await axios.get("https://my-toolsshopbackend.onrender.com/getsale")


          setsalelist(getsale.data)
   
     
     
     
          
     


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
      <div   className="items">
      {salelist.map(items => {


        return(
                           <div className="searchitem">
                           <div className="image "><img src={items.image} width={200} alt="" /></div>
                           <div className="searchfindeditemprice "> <div className="value text-emerald-500 gap-3 flex items-center">{Math.floor(items.price - items.price * items.discount / 100 )}₾<div className="discprice text-gray-500">{Math.floor(items.price)}₾ </div></div></div>
                           <div className="itemcategory text-gray-400">{items.category}</div>
                           <div className="searchfindeditem"> <div className="value text-white">{items.name}</div> </div>
                           <div className="starandreview flex gap-1 items-center">
                           {items.stars >= 1 ?         <img src="/Star.png" width={15} alt="" />
                           : <div></div>}
                           {items.stars >= 2 ?         <img src="/Star.png" width={15} alt="" />
                           : <div></div>}
                           {items.stars >= 3 ?         <img src="/Star.png" width={15} alt="" />
                           : <div></div>}
                           {items.stars >= 4 ?         <img src="/Star.png" width={15} alt="" />
                           : <div></div>}
                           <div className="reviews text-white">({items.review} შეფასება)</div>
            
                           </div>
                            
                            <select  onChange={(e) => handletochange(items._id, e.target.value)} className='raodenoba ' name="" id="">
                              <option value="1">რაოდ 1 </option>
                              <option value="2">რაოდ 2 </option>
                              <option value="3">რაოდ 3 </option>
                              <option value="4">რაოდ 4 </option>
                              <option value="5">რაოდ 5 </option>
                              <option value="6">რაოდ 6 </option>
                              <option value="7">რაოდ 7 </option>
                              <option value="8">რაოდ 8 </option>
                              <option value="9">რაოდ 9 </option>
                            </select>
                            <div className="functions">
                            <button onClick={(e) => addToCart(items._id , raodenoba[items._id] ? raodenoba[items._id] : "1"  )}className='searchitembtn bg-emerald-500'>დაამატე კალათაში  </button>
                            
                            </div>
                           </div>
            )})}
        

      </div>
      <button onClick={() => clickerguy()}>  </button>
    </div>

   </div>

  )
}
}
