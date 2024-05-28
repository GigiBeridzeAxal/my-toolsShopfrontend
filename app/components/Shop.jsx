'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
export default function Shop() {

  const [limitednews , setlimitednews] = useState(['loading..'] ,)
  const [limitedprice , setlimitedprice] = useState(['loading..'] ,)
  const [xer, setx] = useState()
  const [yer, sety] = useState()
  const [clickedbuy , setclickedbuy] = useState(false)

  if(clickedbuy == true){
    setTimeout(() => {
      setclickedbuy(false)
    }, 300);
  }
  
  useEffect(() => {
const getdata = async() => {

  

    const data = await axios.get('http://localhost:4000/')
    const limitedbyprice = await axios.get('http://localhost:4000/limitedbyprice')
    setlimitedprice(limitedbyprice.data)
    setlimitednews(data.data)
     console.log(limitednews)
     


  }
  getdata()


  },[])
 window.addEventListener('mousemove' , (e) => {
      setx(e.pageX)
      sety(e.pageY)


    })
  if(limitednews[0] === 'loading..' ){

   

  }else{ 
  

  return (
    <div className="shop">
      {clickedbuy == true ?  <motion.img style={{left:xer , top:yer}} initial={{left:xer , top:yer}} transition={{duration:0.3}} animate={{left:'68%' , top:'3%'}} className='buyanimation  absolute'  src="/Buying.png" width={30} alt="" /> :  <motion.img className='buyanimation absolute' style={{ display:'none' , left:xer , top:yer}} src="/Buying.png" width={30} alt="" />}
   
        <div className="shopframe">


           <div className="search">

            <div className="searchtittle">მოძებნე ყველა საჭირო ნივთი</div>
            <div className="searchline flex items-center relative ">

                       <div className="searchinput"><img src="/Search.png" width={30} alt="" /><input type="text" placeholder='მოძებნე სასურველი ნივთები' /></div>
                        <button className='searchbtn bg-yellow-300 ' ><img src="/Search.png" width={30} alt="" />ძებნა</button>
            </div>
  
           </div>

           <div className="categoryes">
            <div className="categorytittle">ყველა კატეგორია</div>
            <br />
            <div className="catlist flex items-center gap-3">

              <a href=""><img src="/All.png" width={250} alt="" /></a>
              <a href=""><img src="/Work.png" width={250} alt="" /></a>
              <a href=""><img src="/Technik.png" width={250} alt="" /></a>
              <a href=""><img src="/Meoradi.png" width={250} alt="" /></a>
            </div>
           </div>

           <div className="newest">
            <div className="newtittle">უახლესი შემოთავაზებები</div>
            <br />
            <div className="newlist flex items-center gap-3">
            {limitednews.map(items => (
               <div className="card gap-4 flex">
               <div className="left  gap-3">
               <div className="cardtittle text-gray-500">{items.category}</div>
               <div className="cardproduct">{items.name}</div>
               <div className="cardstar flex gap-3 items-center"><div className="stars flex items-center gap-1">
                 
               {items.stars >= 1 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 2 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 3 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 4 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}

                 
                 </div> <div className="reviews text-gray-500">({items.review} შეფასება)</div></div>
                 <div className="price flex items-center gap-3"><div className="price text-emerald-500">{items.price} $</div> <button onClick={() => setclickedbuy(true)} ><img className='addtocart' src="/Buying.png" width={30} alt="" /> </button></div>
                
                
               </div>
               <div className="right flex justify-center items-center">

<img src={items.image} width={150} alt="" />

</div>


               

                           

               

             </div>
            ))}
           
            

            </div>
           </div>
           <div className="newest">
            <div className="newtittle">იაფი შემოთავაზებები</div>
            <br />
            <div className="newlist flex items-center gap-3">
            {limitedprice.map(items => (
               <div className="card gap-4 flex">
               <div className="left  gap-3">
               <div className="cardtittle text-gray-500">{items.category}</div>
               <div className="cardproduct">{items.name}</div>
               <div className="cardstar flex gap-3 items-center"><div className="stars flex items-center gap-1">
                 
               {items.stars >= 1 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 2 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 3 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 4 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}

                 
                 </div> <div className="reviews text-gray-500">({items.review} შეფასება)</div></div>
                 <div className="price flex items-center gap-3"><div className="price text-emerald-500">{items.price} $</div> <img className='addtocart' src="/Buying.png" width={30} alt="" /> </div>
                
                
               </div>
               <div className="right flex justify-center items-center">

<img src={items.image} width={150} alt="" />

</div>


               

                           

               

             </div>
            ))}
           
            

            </div>
           </div>

         
        </div>
    </div>
  )
}
}
