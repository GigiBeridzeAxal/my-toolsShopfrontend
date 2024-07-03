import Image from "next/image";
import Header from "./components/Header";

import Shop from "./components/Shop";
import Sale from "./components/Sale";
import LimitedPriceSort from "./components/LimitedPriceSort";
import Footer from "./components/Footer";

export default function Home() {


  return (

   <>
      <Header></Header>

      <Shop  ></Shop>
      <br /><br />
      <Sale></Sale> 
      <br />
      <LimitedPriceSort></LimitedPriceSort>
      <br />
      <Footer></Footer>

    
   </>
  );
}
