import React from 'react'

export default function Shop() {
  return (
    <div className="shop">
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
            <div className="card gap-4 flex">
                <div className="left  gap-3">
                <div className="cardtittle text-gray-500">მეორადი ტექნიკა</div>
                <div className="cardproduct">2022 KUBOTA MX6000 HSTC</div>
                <div className="cardstar flex gap-3 items-center"><div className="stars flex items-center gap-1">
                  
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />

                  
                  </div> <div className="reviews text-gray-500">(5 შეფასება)</div></div>
                  <div className="price flex items-center gap-3"><div className="price text-emerald-500">490.99$</div> <img className='addtocart' src="/Buying.png" width={30} alt="" /> </div>
                 
                 
                </div>
                <div className="right flex justify-center items-center">

<img src="/Tractor.png" width={150} alt="" />

</div>


                

              </div>
              <div className="card gap-4 flex">
                <div className="left  gap-3">
                <div className="cardtittle text-gray-500">სამუშაო ტექნიკა</div>
                <div className="cardproduct">Skil 7-14 14A Circular Saw</div>
                <div className="cardstar flex gap-3 items-center"><div className="stars flex items-center gap-1">
                  
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />

                  
                  </div> <div className="reviews text-gray-500">(8 შეფასება)</div></div>
                  <div className="price flex items-center gap-3"><div className="price text-emerald-500">230.99$</div> <img className='addtocart' src="/Buying.png" width={30} alt="" /> </div>
                 
                 
                </div>
                <div className="right">

<img src="/Skill7-14.png" width={150} alt="" />

</div>

                

              </div>
              <div className="card gap-4 flex">
                <div className="left  gap-3">
                <div className="cardtittle text-gray-500">სამუშაო ტექნიკა</div>
                <div className="cardproduct">Skil 7-14 14A Circular Saw</div>
                <div className="cardstar flex gap-3 items-center"><div className="stars flex items-center gap-1">
                  
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />
                <img src="/Star.png" width={15} alt="" />


                  
                  </div> <div className="reviews text-gray-500">(13 შეფასება)</div></div>
                  <div className="price flex items-center gap-3"><div className="price text-emerald-500">230.99$</div> <img className='addtocart' src="/Buying.png" width={30} alt="" /> </div>
                 
                 
                </div>
                <div className="right">

<img src="/Skill7-14.png" width={150} alt="" />

</div>

                

              </div>

            </div>
           </div>

        </div>
    </div>
  )
}
