'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Loading from '../components/Loading'

export default function page() {

    const [cartlist , setcartlist] = useState(() => {
        const savedlist = localStorage.getItem("cart")
        return savedlist ? JSON.parse(savedlist) : []
    })
    const [cartdata ,setcart] = useState(["loading..."])
    const [totalprice , settotalprice] = useState(0)
    const [discount , setdiscount] = useState()
    const [salecartdata , setsalecartdata] = useState(["loading..."])

    const [dataforbackend , setdataforbackend] = useState([])
    function removeItemFromCart(itemId) {
      // Retrieve the cart from localStorage
      let cart = JSON.parse(localStorage.getItem('cart'));
  
      if (!cart) {
          console.log('Cart is empty or not found');
          return;
      }
  
      // Filter out the item to be removed
      cart = cart.filter(item => item.id !== itemId);

  
      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      setcart(cartdata.filter(item => item._id !== itemId))
      console.log(cartdata)
      console.log(`Item with id '${itemId}' has been removed. Updated cart:`, cart);
  }
    const [amountcalculator , setamountcalculator] = useState(pervamount => {
     return cartlist.map(item =>  ({id:item.id , amount:item.amount} ))

    })
    setInterval(() => {

    }, 5000);
 



        useEffect(() => {


        const getitemsapi = async() => {
          const getdata = await axios.post("http://localhost:4000/getcartitems" , {
            cartitems:cartlist.map(item => item.id)
          })
          console.log(getdata)
            const totalSum = getdata.data.data.reduce((acc, item) => acc + item.price * amountcalculator.filter((data) => {return cartlist.length === 0 ? data : data.id.includes(item._id)  }).map(item =>  item.amount  )    , null);
            const SaleSum = getdata.data.saledata.reduce((acc, item) => acc +item.price * amountcalculator.filter((data) => {return cartlist.length === 0 ? data : data.id.includes(item._id)  }).map(item =>  item.amount  ) , null)
            const totaldiscount = getdata.data.saledata.reduce((acc, item) => acc + item.discount ,null)
            const discount =  totaldiscount
            {discount ?            setdiscount(discount) : setdiscount(0)}

            console.log(totalSum , Math.floor(discount))

                  
            settotalprice(Math.floor(SaleSum - SaleSum * discount / 100  + totalSum))
            
   







 
          setcart(getdata.data.data)
          setsalecartdata(getdata.data.saledata)

        }
        getitemsapi()

    },[])


    if(cartdata[0] === "loading..."){
      return <>
          <Header></Header>
<Loading></Loading>
      </> 
    }else{

  return (
    <>
    <Header></Header>
    <div className="cartlist">
    
      <div className="cartlistframe">




    <div className="cartlister flex items-center gap-3">
    {cartdata.map(items => {   

      return(
      
      <div className="cartlistitems gap-4 flex">
        <div className="photolocat bg-gray-200 p-3"><img src={items.image} width={100} alt="" /></div>
        <div className="info ">
          <button onClick={() => removeItemFromCart(items._id)} >Remove Button</button>
          <div className="firstline ">{items.name}</div>
          <div className="secondline flex justify-between"> <div className="class">{items.category}</div> <div className="fasi flex items-center gap-2">{items.price * amountcalculator.filter((data) => {return cartlist.length === 0 ? data : data.id.includes(items._id)  }).map(item =>  item.amount  ) } ლ     </div> </div>

          {items.discount == true ? <div><div className="secondline flex justify-end">{items.discount} %</div></div> : <div className='flex justify-end'>ფასდაკლება არ მოიძებნა</div>}
          <div className="secondline justify-between   flex gap-3 "> <div className='flex items-center gap-3' ><div className="timeforship bg-yellow-500 text-white p-1">მიტანის დრო 2-7 დღე</div><div className="garat p-1 bg-emerald-500 text-white">ასევე 1 წლიანი გარანტია</div></div>  <div className="amount flex items-center">რაოდენობა:  {amountcalculator.filter((item) => {return cartlist.length === 0 ? item : item.id.includes(items._id)  }).map(item => (<div>{item.amount}</div>)) }</div> </div>

        </div>
      </div>

    
)})}

    {salecartdata.map(items => (

<div className="cartlistitems gap-4 flex">
  <div className="photolocat bg-gray-200 p-3"><img src={items.image} width={100} alt="" /></div>
  <div className="info ">
    <div className="firstline ">{items.name}</div>
    <div className="secondline flex justify-between"> <div className="class">{items.category}</div>  <div className="fasi">{Math.floor(items.price * amountcalculator.filter((data) => {return cartlist.length === 0 ? data : data.id.includes(items._id)  }).map(item =>  item.amount  )  - items.price / items.discount) } ლ</div></div>

    {items.discount > 0 ? <div><div className="secondline flex justify-end "> <div className="percentdiscount">{items.discount}% </div> <div className="discountedpriceer text-gray-500">{Math.floor(items.price * amountcalculator.filter((data) => {return cartlist.length === 0 ? data : data.id.includes(items._id)  }).map(item =>  item.amount  )      * items.discount / 100) } ლ</div></div></div> : <div className='flex justify-end'>ფასდაკლება არ მოიძებნა</div>}
    <div className="secondline justify-between   flex gap-3 "> <div className='flex items-center gap-3' ><div className="timeforship bg-yellow-500 text-white p-1">მიტანის დრო 2-7 დღე</div><div className="garat p-1 bg-emerald-500 text-white">ასევე 1 წლიანი გარანტია</div></div>  <div className="amount flex items-center">რაოდენობა:  {amountcalculator.filter((item) => {return cartlist.length === 0 ? item : item.id.includes(items._id)  }).map(item => (<div>{item.amount}</div>)) }</div> </div>

  </div>
</div>


))}
  
    

    </div>
    <div className="rightpanel">

<div className="checkout">
  <div className="checktittle">შეკვეთის ჯამი</div>
  <div className="calulator flex"> <div className="calcname">ფასდაკლება</div> {discount ? discount : 0} % </div>
  <hr />
  <div className="calulator flex"> <div className="calcname">სულ ნივთები</div> ({cartlist.map((item) => item.amount).reduce((acc,value) => acc + Number(value) , 0)} ნივთი)</div>
  <a href='/pay' className='gadaxda bg-emerald-500'>გადახდა </a>
  <div className="rules ">
   <div className="first text-gray-500">1 . ნივთის მიტანის მაქსიმალური დრო 1 კვირა საქართველოს მასშტაბით</div>
   <div className="second text-gray-500">2 . ნივთის მიტანის დროის 1 კვირის გადაცილების შემდეგ გიბრუნდებათ თანხა</div>

  </div>
</div>

</div>  
    </div>
     
    </div>
    



    </>
  )
}
}
