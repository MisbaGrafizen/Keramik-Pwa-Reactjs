import React from "react";
import backArrow from "../../../public/imges/main/back-arrow.png";
import flag from "../../../public/imges/main/headerIndia.png";
import avter from "../../../public/imges/main/avter.jpeg";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/imges/MianLogo.png";

export default function Header({ pageName = "" }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <section className=" flex  fixed max-w-[450px]  gap-[10px]   rounded-[4px] min-w-[350px]    mx-auto w-[100%] ">
        <div className=" w-[100%]   gap-[10px] flex items-center px-[10px] border-b-[1.5px] rounded-b-[8px] pb-[25px] pt-[20px] justify-between bg-[#000000] h-[100px]">
          <div className="">
            <img className=" flex w-[240px] ]" src={logo} />
          </div>
          <button className=" mr-[20px] flex  mt-[13px] text-[#fff]  gap-[10px]  items-center  p-[9px] rounded-[8px] font-Poppins">
            <i className="fa-solid text-[25px] fa-phone-volume"></i>
           
          </button>
        </div>
      </section>
    </>
  );
}
