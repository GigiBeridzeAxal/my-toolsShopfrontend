'use client'
import axios from 'axios'
import React , {useEffect , useState} from 'react'

export default function LimitedPriceSort() {
    
    const [limitedprice , setlimitedprice] = useState(['loading..'] ,)
    const [raodenoba , setraodenoba] = useState({})
    const handletochange = (itemId , value) => {
      setraodenoba({
        ...raodenoba,
        [itemId]: value
      })
      console.log(raodenoba)

    }

    const [cartitems , setcartitems] = useState()
   
    useEffect(() => {
      // Save cart items to localStorage whenever they change
      window.localStorage.setItem('cart', JSON.stringify(cartitems));
      
    }, [cartitems]);

  

    const addToCart = (itemId, amount) => {
      setcartitems(prevCartItems => {
        const prevCartItemser = JSON.parse(window.localStorage.getItem('cart'))

        const existingItemIndex = prevCartItemser.findIndex(item => item.id === itemId);
        if (existingItemIndex > -1) {
          // Update the existing item's amount
          const updatedCartItems = [...prevCartItemser];
         updatedCartItems[existingItemIndex].amount = amount;
          return updatedCartItems;
        } else {
          // Add new item to the cart
          
          return [...prevCartItemser, { id: itemId, amount }];
        }
      });
    };

 


    useEffect(() => {
      
      const func = async() => {
        const limitedbyprice = await axios.get('https://my-toolsshopbackend.onrender.com/limitedbyprice')
        setlimitedprice(limitedbyprice.data)
        
        }



           func()
            




    })
    
    if(limitedprice[0] == "loading..."){
      return <>

                
      </>
    }else{
  return (
    <div className="shop">
        <div className="shopframe">


    <div className="newest">
    <div className="newtittle">იაფი შემოთავაზებები</div>
    <br />
    <div className="newlist flex items-center gap-3">
    {limitedprice.map(items => { 



      return(
        <div className="searchitem">
        <div className="image "><img src={items.image} width={200} alt="" /></div>
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
        <select onChange={(e) => handletochange(items._id , e.target.value)} className='raodenobablack' name="" id="">
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
                            <button onClick={(e) => addToCart(items._id , raodenoba[items._id] ? raodenoba[items._id] : "1" )}className='searchitembtn bg-emerald-500'>დაამატე კალათაში  </button>
        </div>
    )})}
  
    

    </div>
   </div>
   </div>
    </div>
  )
}
}

