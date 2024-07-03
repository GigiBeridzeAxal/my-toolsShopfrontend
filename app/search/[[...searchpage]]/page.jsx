'use client'
import Header from '@/app/components/Header';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
export default function page() {
  const router = useSearchParams();
  const searcher = router.get('productname')
  const categoryer = router.get('category')

  const [search , setsearch] = useState(searcher)
  
  const [category , setcategory] = useState(categoryer)
  useEffect(() => {
    setsearch(searcher)
  },[searcher])
  useEffect(() => {
    setcategory(categoryer)
  },[categoryer])
  const [data , setdata] = useState('')
  const [price , setprice] = useState(true)
  const [selectedfilter , setselectedfilter] = useState()

  useEffect(() => {

    const getsearch = async() => {

      const getdata = await axios.get('http://localhost:4000/getsearch')
      console.log(getdata)
      setdata(getdata.data)


    }
    getsearch()


  },[])




  if(data === ''){
   return (
    <Header></Header>
   )
  }else{

  






  return (
    <>
    <Header></Header>

    <div className="searchpage">
      <div className="searchframe">
        <div className="rightsearchpanel bg-gray-100">
          <div className="searchtittler">Filter</div>

         <div className="informator">აირჩიე ფასის შუალედი </div>
         <div className="pricelimiter">

          <div className="dan">
            <input className='text-black' type="text"  placeholder='₾ - დან' />
          </div>
          <div className="slide">-</div>
          <div className="amde"><input  className='text-black' type="text" placeholder='₾ - მდე' /></div>
         </div>
         
        
  <br />
  <div className="categorycheckername">გაფილტრვა კატეგორიების მიხედვით</div>

         <div className="categorychecker ">
          <Link href={
                          {pathname:`/search`,
                          query:{
                            productname:search,
                            category:''
                          }
                }}>{categoryer == '' ? <button className='choosedbutton' >ყველა კატეგორია</button> : <button>ყველა კატეგორია</button>}</Link>
              <Link  href={
                          {pathname:`/search`,
                          query:{
                            productname:search,
                            category:'სამუშაო იარაღები'
                          }
                }}>{categoryer == 'სამუშაო იარაღები' ? <button className='choosedbutton' >სამუშაო იარაღები</button> : <button>სამუშაო იარაღები</button>}</Link>
              <Link href={
                          {pathname:`/search`,
                          query:{
                            productname:search,
                            category:'სამუშაო ტექნიკა'
                          }
                }}>{categoryer == 'სამუშაო ტექნიკა' ? <button className='choosedbutton' >სამუშაო ტექნიკა</button> : <button>სამუშაო ტექნიკა</button>}</Link>
              <Link href={
                          {pathname:`/search`,
                          query:{
                            productname:search,
                            category:'მეორადი'
                          }
                }}>{categoryer == 'მეორადი' ? <button className='choosedbutton' >მეორადი</button> : <button>მეორადი</button>}</Link>
          </div>

        <div className="filterdiv">

         
                   <button className='filterbutton bg-gray-900 text-white'>გაფილტრვა</button>
        </div>



        </div>
        <div className="searchlist">
          
        {data.filter((items) => {return search == '' ? 
    items : items.name.toLowerCase().includes(search.toLowerCase())}).filter((item) => {return category == '' ? item : item.category.includes(category)}).map(items => (
               <div className="searchitem">
               <div className="image "><img src={items.image} width={200} alt="" /></div>
               <div className="searchfindeditemprice"> <div className="value text-emerald-500">{items.price}₾</div></div>
               <div className="itemcategory text-gray-500">{items.category}</div>
               <div className="searchfindeditem"> <div className="value">{items.name}</div> </div>
               <div className="starandreview flex gap-1 items-center">
               {items.stars >= 1 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 2 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 3 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               {items.stars >= 4 ?         <img src="/Star.png" width={15} alt="" />
               : <div></div>}
               <div className="reviews">({items.review} შეფასება)</div>

               </div>
                
                <button className='searchitembtn bg-emerald-500'>დაამატე კალათაში  </button>
               </div>
     
            ))}
        </div>
      </div>
    </div>
   
    </>
  )
}
}