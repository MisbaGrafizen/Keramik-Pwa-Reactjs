import React from "react";
import Header from "../Component/header/Header";
import Maincategory from "../Component/Maincategory";
import Preloader from "../Component/Preloader";

export default function Home() {
  return (
    <>

      <div className=" max-w-[450px]  gap-[10px]  flex flex-col relative  rounded-[4px] h-[100vh] min-w-[350px] mx-auto  ">
      <Preloader />
        <Header />
        
        <Maincategory />
      </div>
       
    </>
  );
}
