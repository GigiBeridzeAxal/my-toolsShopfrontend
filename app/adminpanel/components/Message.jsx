'use client'
import axios from 'axios'
import React, {useState} from 'react'

export default function Message() {
  const [message , setmessage] = useState()
  const [sucess , setsucess] = useState()



  const sendtobackend = async() => {
    const send = await axios.post("http://localhost:4000/createMessage" , {
      message
    })




    

    if(send){
      setsucess(true)
    }else{
      setsucess('not true')
    }

  }

  return (
    <div className="messageer">
        <div className="messagepanel ">
            <div className="messagecreator">
              {sucess == true ?  <div className="label text-emerald-500">წარმატებით დაემატა სიახლე</div> : <div></div>}
              <div className="label text-gray-500">ახალი სიახლე ყველა მომხმარებელისათვის</div>
                <textarea onChange={(e) => setmessage(e.target.value)} className='bg-gray-800 text-white' type="text" placeholder='შეიყავენთ ახალი სიახლე' name="" id="" />
                <button onClick={() => sendtobackend() } class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  დაამატე ახალი სიახლე
</button>
            </div>
        </div>
    </div>
  )
}
