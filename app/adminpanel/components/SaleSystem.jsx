'use client'
import axios from 'axios'
import React, { useState } from 'react'


export default function SaleSystem() {

  const [saledate , setsaledate] = useState()
  const [saledatesucess , setsaledatesucess] = useState('hello')
  const [prodname , setprodname] = useState()
  const [prodreview , setprodreview] = useState()
  const [price , setprice] = useState()
  const [star , setstar] = useState(0)
  const [base64 , setbase64] = useState()
  const [category , setcategory] = useState()
  const [sucess , setsucess] = useState()
  const [discount , setdiscount] = useState()

  const createtool = async() => {
    const create = await axios.post("http://localhost:4000/saleadd" , {

    name: prodname,
    price: price,
    image: base64,
    category: category,
    review: prodreview,
    stars:star,
    discount: discount

    })
    if(create){
        console.log("Created")
        setsucess(true)
        setTimeout(() => {
            setsucess(null)
        }, 2500);
    }else{
        console.log("Cant Create")
        setsucess(0)
    }
}

const renderfile = (e) => {
  const image = e.target.files[0]
  const render = new FileReader()

  render.onloadend = () => {

      setbase64(render.result)
      console.log(render.result)

  }
  render.readAsDataURL(image)


}

  const saledateapi = async() => {

    const create = await axios.post("http://localhost:4000/saledate" , {
      date:saledate
    })

    if(create){
      setsaledatesucess(true)
      setTimeout(() => {
        setsaledatesucess('hello')
        
      }, 2500);


    }else{
      setsaledatesucess(false)

    }


  }

  return (
    <>
    
    <div className="saleadd">
      
      <div className="saleframeadd">

        

<div className="saledateadd">
<div className="saletittler text-white">    დაამატე ახალი თარიღი ფასდაკლებისთვის</div>
{saledatesucess == true ? <div className="saletittler bg-emerald-500 text-white">წარმატებით შეიცვალა თარიღი</div> : <div></div>}
  <div className="inputs">
    <input onChange={(e) => setsaledate(e.target.value)} type="text" placeholder='შეიყვანე ფასდაკლების ბოლო თარიღი ფორმატი:May 29, 2024 12:00:00' />
  <button onClick={() => saledateapi()} className='bg-emerald-500 text-white'>დაამატე ახალი თარიღი</button>
  </div>
  
</div>
       
       <div className="saleitemad"></div>

      </div>
    </div>

    <>
                              <div className="createtittle">  დამატება</div>
 <div className="panelcreater">
         
                    <div className="panelcreateframe">
                        <div className="panelcreateframetittle">დაამატე ფასდაკლების ნივთი</div>
                        {sucess == true ? <div className="sucess text-emerald-500">Sucessfuly Created New Tool</div> : <div></div>}
                        <input onChange={(e) => setprodname(e.target.value)} type="text" placeholder='ხელსაწყოს სახელი' />
                        <input onChange={(e) => setprodreview(e.target.value)} type="text" placeholder='ხელსაწყოს შეფასება' />
                        <input onChange={(e) => setprice(e.target.value)} type="text" placeholder='ხელსაწყოს ფასი' />
                        <input onChange={(e) => setdiscount(e.target.value)} type="text" placeholder='დააყენეთ ფასდაკლება' />
                        
                        <div className="damateba">
                                                  <div className="aircie">აირჩიე ნივთის კატეგორია</div>  <select onChange={(e) => setcategory(e.target.value)} className='optionselector' name="" id="">
                        <option value="მეორადი">მეორადი</option>
                        <option value="სამუშაო ტექნიკა">სამუშაო ტექნიკა</option>
                        <option value="სამუშაო იარაღები">სამუშაო იარაღები</option>


                        </select>


  
                        </div>
                              <div className="starchooser flex items-center justify-center gap-3 ">
                                <div className="stars flex items-center gap-5 ">
                                    {star >= 1 ?   <button value='1' onClick={(e) => setstar(1)} ><img src="/Star.png" width={30} alt="" /></button> :   <button value='1' onClick={(e) => setstar(1)} ><img src="/blackstar.png" width={30} alt="" /></button>}
                                    {star >= 2 ?    <button onClick={(e) => setstar(2)} value='2' ><img src="/Star.png" width={30} alt="" /></button> :    <button onClick={(e) => setstar(2)} value='2' ><img src="/blackstar.png" width={30} alt="" /></button>}
                                    {star >= 3 ?     <button onClick={(e) => setstar(3)} value={3}><img src="/Star.png" width={30} alt="" /></button>:      <button onClick={(e) => setstar(3)} value={3}><img src="/blackstar.png" width={30} alt="" /></button>}
                                    {star >= 4 ?       <button onClick={(e) => setstar(4)} value={4}><img src="/Star.png" width={30} alt="" /></button>:        <button onClick={(e) => setstar(4)} value={4}><img src="/blackstar.png" width={30} alt="" /></button>}
                         
                          
                         
                            
                                </div>
                                <div className="starstittle">აირჩიე ნივთის ხარისხი</div>
                        </div>
                        <div className="uploadphoto">
                            <input onChange={(e) => renderfile(e)} type="file" name="" id="" />
                            <img src={base64} width={300} alt="" />
                        </div>
                      <button onClick={() => createtool()} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  დაამატე სამუშაო იარაღი
</button>

                        
                    </div>
                    
                   </div>
                   </>
    
    </>
  )
}
