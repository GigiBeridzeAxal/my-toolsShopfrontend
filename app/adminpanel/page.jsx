'use client'
import axios from 'axios'
import Cookies from 'js-cookie'

import React, { useState } from 'react'

export default function page() {


    const [username , setusername] = useState()
    const [password , setpassword] = useState()

    const changepassword = (e) => {
        setpassword(e.target.value)

    }
    const changeusername = (e) => {
        setusername(e.target.value)


    }

    const connect = () => {

        if(username !== process.env.NEXT_PUBLIC_ADMINNAME || password !== process.env.NEXT_PUBLIC_ADMINPASSWORD){
              console.log("Field Is Not Valid")
        }else{
            console.log("Setting")
            Cookies.set("Admin", process.env.NEXT_PUBLIC_ADMINPASSWORD , {
                expires:0.1
            } )
        }

    }



    const [selected , setselected] = useState('დამატება')
    const [prodname , setprodname] = useState()
    const [prodreview , setprodreview] = useState()
    const [price , setprice] = useState()
    const [star , setstar] = useState(0)
    const [base64 , setbase64] = useState()
    const [category , setcategory] = useState()
    const [sucess , setsucess] = useState()

    const createtool = async() => {
        const create = await axios.post("http://localhost:4000/" , {
            name:prodname,
            price,
            category,
            image:base64,
            review:prodreview,
            stars:star

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
    const changeselected = (e) => {

        setselected(e.target.innerText)

    }
    const changestar = (e) => {

        setstar(e.target.value)
        console.log(e.target.value)

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


    if(Cookies.get('Admin')){
        const accesscontroler = Cookies.get('Admin')
    if(accesscontroler === process.env.NEXT_PUBLIC_ADMINPASSWORD){
      


        return(         
            <>
          <div className="admin">
            <div className="adminpanel flex">
                <div className="leftpanel ">
                    <div className="bar">
                        <div className="logopanel text-white flex items-center justify-start ">
                        <div className="text-sky-400">GIGI</div> PANEL
                        </div>



                    <br />
                    <div className="sectionspanel">
                        <div className="tittle text-gray-300">სამართავი პანელი</div>

                             {
                                selected === "დამატება" ?    <div onClick={(e) => changeselected(e)} className="cursor-pointer option text-white choosed flex items-center gap-3 justify-center"> <img src="/Create.png" width={30} alt="" />  <button  >  დამატება</button></div> :    <div onClick={(e) => changeselected(e)} className="cursor-pointer option text-white flex items-center gap-3 justify-center"> <img src="/Create.png" width={30} alt="" />  <button  >  დამატება</button></div>
                             }
                               {
                                selected === "ჩასწორება" ?    <div onClick={(e) => changeselected(e)} className="cursor-pointer option text-white flex items-center choosed gap-3 justify-center"> <img src="/Eraser.png" width={30} alt="" />  <button  >ჩასწორება</button></div> :   <div onClick={(e) => changeselected(e)} className="cursor-pointer option text-white flex items-center gap-3 justify-center"> <img src="/Eraser.png" width={30} alt="" />  <button  >ჩასწორება</button></div>
                             }
                       
                          
                          



                    </div>
                    </div>
                </div>
                <div className="rightanswer ">
                   {selected === 'დამატება' ? 
                   
                   <>
                              <div className="createtittle">  დამატება</div>
 <div className="panelcreate">
         
                    <div className="panelcreateframe">
                        <div className="panelcreateframetittle">დაამატე ახალი ნივთი</div>
                        {sucess == true ? <div className="sucess text-emerald-500">Sucessfuly Created New Tool</div> : <div></div>}
                        <input onChange={(e) => setprodname(e.target.value)} type="text" placeholder='ხელსაწყოს სახელი' />
                        <input onChange={(e) => setprodreview(e.target.value)} type="text" placeholder='ხელსაწყოს შეფასება' />
                        <input onChange={(e) => setprice(e.target.value)} type="text" placeholder='ხელსაწყოს ფასი' />
                  
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
                   
                  
                   
                   : <div></div>}


                </div>

            </div>
          </div>
            </>                     
             
        )

    }


          

       
    }else{
        return(         
            <>
            <div className="logo"><img src="/PowerToolPlaza.png" width={250} alt="" /></div>
            <div className="adminlogin flex items-center justify-center">

                <div className="adminloginframe">
                    <div className="adminpaneltittle flex items-center justify-center">Admin Panel</div>
                    <input onChange={(e) => changeusername(e)} type="text" placeholder='შეიყვანე ადმინის სახელი' />
                <input onChange={(e) => changepassword(e)} type="text" placeholder='შეიყვანე ადმინის პაროლი' />
                <a href='/adminpanel' onClick={() => connect()} className='bg-emerald-500'>შესვლა</a>
                </div>
                
            </div>
            </>                     
             
        )
    }
        


        
        

  
  



 
}
