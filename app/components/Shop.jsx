'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Sale from './Sale'
import Link from 'next/link'
import Loading from './Loading'
export default function Shop() {

  const [limitednews , setlimitednews] = useState(['loading..'] ,)

  const [xer, setx] = useState()
  const [yer, sety] = useState()
  const [raodenoba , setraodenoba] = useState({})
  const handletochange = (itemId , value) => {
    setraodenoba({
      ...raodenoba,
      [itemId]: value
    })
    console.log(raodenoba)

  }
  const [searcher , setsearcher] = useState()
  const [clickedbuy , setclickedbuy] = useState(false)
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
      console.log(existingItemIndex)
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
  
  if(clickedbuy == true){
    setTimeout(() => {
      setclickedbuy(false)
    }, 300);
  }



  
 




  useEffect(() => {

 

 
const getdata = async() => {

  


        const data = await axios.get('https://my-toolsshopbackend.onrender.com/')

    setlimitednews(data.data)




     


  }

    getdata()





  },[])
 window.addEventListener('mousemove' , (e) => {
      setx(e.pageX)
      sety(e.pageY)


    })
  if(limitednews[0] === 'loading..' ){

    return 

   

  }else{ 
  

  return (
    <>
    <div className="shop">
      {clickedbuy == true ?  <motion.img style={{left:xer , top:yer}} initial={{left:xer , top:yer}} transition={{duration:0.3}} animate={{left:'68%' , top:'3%'}} className='buyanimation  absolute'  src="/Buying.png" width={30} alt="" /> :  <motion.img className='buyanimation absolute' style={{ display:'none' , left:xer , top:yer}} src="/Buying.png" width={30} alt="" />}
   
        <div className="shopframe">
          <br />
          <div  className="bannerframe">
             <img className='bannerimage' src="banner2.png" alt="" />
             <img className='bannerimage' src="banner1.png" alt="" />
          </div>

       


           <div className="search">

          
            <div className="searchline flex items-center relative ">


                     
            </div>
  
           </div>

           <div className="categoryes">
            <div className="categorytittle">ყველა კატეგორია</div>
            <br />
            <div className="catlist flex items-center gap-3">

              <Link href={
                          {pathname:`/search`,
                          query:{
                            productname:'',
                            category:''
                          }
                }}><img src="/All.png" width={250} alt="" /></Link>
              <Link  href={
                          {pathname:`/search`,
                          query:{
                            productname:'',
                            category:'სამუშაო იარაღები'
                          }
                }}><img src="/Work.png" width={250} alt="" /></Link>
              <Link href=""><img src="/Technik.png" width={250} alt="" /></Link>
              <Link href=""><img src="/Meoradi.png" width={250} alt="" /></Link>
            </div>
           </div>

           <div className="newest">
            <div className="newtittle">უახლესი შემოთავაზებები</div>
            <br />
            <div className="newlist flex items-center gap-3">
            {limitednews.map(items => {


              return(

   <div className="searchitem">
   <div className="image bg-gray-200 "><img src={items.image} width={200} alt="" /></div>
   <div className="searchfindeditemprice"> <div className="value text-emerald-500">{Math.floor(items.price)}₾</div></div>
   <div className="itemcategory text-gray-500">{items.category}</div>
   <div className="searchfindeditem"> <div className="value ">{items.name}</div> </div>
   <div className="starandreview flex gap-1 items-center">
   {items.stars >= 1 ?         <img src="/Star.png" width={15} alt="" />
   : <div></div>}
   {items.stars >= 2 ?         <img src="/Star.png" width={15} alt="" />
   : <div></div>}
   {items.stars >= 3 ?         <img src="/Star.png" width={15} alt="" />
   : <div></div>}
   {items.stars >= 4 ?         <img src="/Star.png" width={15} alt="" />
   : <div></div>}
   <div className="reviews ">({items.review} შეფასება)</div>

   </div>
   <select  onChange={(e) => handletochange(items._id ,e.target.value)} className='raodenobablack ' name="" id="">
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
    <button onClick={(e) => addToCart(items._id , raodenoba[items._id] ? raodenoba[items._id] : "1"  )}className='searchitembtn bg-emerald-500'>დაამატე კალათაში  </button>
   </div>
            )})}
           
            

            </div>
           </div>
          

         
        </div>
    </div>



   </>
  )
}
}
