import Image from "next/image";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Shop from "./components/Shop";
import Sale from "./components/Sale";

export default function Home() {
  return (

   <>
      <Header></Header>
      <Sections></Sections>
      <Shop></Shop>
      <br /><br />
      <Sale></Sale>
      <br />
   </>
  );
}
