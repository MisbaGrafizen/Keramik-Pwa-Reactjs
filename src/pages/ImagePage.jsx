import React from "react";
import mainimage from "../../public/imges/login-bg.png";
import Preloader from "../../src/Component/Preloader"

export default function ImagePage() {
  return (
    <>
    <Preloader />
      <div className="flex mx-auto w-[100%] ">
        <img className=" w-[100%]" src={mainimage} />
      </div>
    </>
  );
}
