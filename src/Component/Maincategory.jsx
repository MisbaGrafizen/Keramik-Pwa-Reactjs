import React, { useState } from "react";
import { Modal as NextUIModal, ModalContent, useNavbar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function MainCategory() {
  const [caratModalOpen, setCaratModalOpen] = useState(false);
const navigate =useNavigate();
const handleViewImage =()=>{
  navigate ("/image")
}
  const handleSizeModalOpen = () => {
    setCaratModalOpen(true);
  };

  const handleModalClose = () => {
    setCaratModalOpen(false);
  };

  const [categories] = useState([
    " Ceramic Tiles",
    " Porcelain Tiles",
    " Mosaic Tiles",
    " Wooden Tiles",
    " Marble Tiles",
    " Granite Tiles",
    " Glass Tiles",
    " Concrete Tiles",
  ]);

  const [categories1] = useState([
    " 200 x 300",
    " 200 x 300",
    " 200 x 300",
    " 200 x 300",
  ]);

  const [categories2] = useState([
    " Wooden ",
    " Marble  ",
    " Concrete ",
    " Granite ",
  ]);
  const [currentStep, setCurrentStep] = useState("size");
  const handleSizeSelection = () => {
    setCurrentStep("tiles"); // Transition to the "tiles" container
  };

  const handleTileSelection = (tile) => {
    console.log(`Tile selected: ${tile}`);
    // Add your logic here for tile selection
  };

  return (
    <>
      <div className="flex w-[100%]  pt-[120px] px-[20px]">
        <div className="grid grid-cols-2 gap-[15px] w-[100%] mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={handleSizeModalOpen}
              className="flex w-[170px] px-[10px]  gap-[10px] font-Poppins bg-white text-[#000] mx-auto rounded-[7px] py-[8px]  border-[1px] border-[#fff]"
            >
              <b className=" flex font-Poppins  font-[600]">{index + 1}</b>
              <span className=" flex h-[19px] w-[1.9px] bg-[#000]"></span>{" "}
              {category}
            </button>
          ))}
        </div>
      </div>

      <NextUIModal isOpen={caratModalOpen} onClose={handleModalClose}>
        <ModalContent className=" shadow-none z-[100]   flex  flex-col  !bg-transparent mb-[35%] h-[500px]">
          <div className="relative w-[100%] max-w-[360px] bg-[#000]  mt-[10px] backdrop-blur-[19.5px] border-[2px] border-[rgba(255,255,255,0.18)]  rounded-2xl z-[100] flex justify-center !py-0 mx-auto h-[460px]">
            <div
              className="absolute right-[-13px] top-[-14px] flex gap-[5px] z-[300] items-center cursor-pointer py-[5px] rounded-bl-[8px] px-[5px]"
              onClick={handleModalClose}
            >
              <i className="text-[30px] text-[red] bg-white rounded-full fa-solid fa-circle-xmark"></i>
            </div>
            {currentStep === "size" && (
              <div className="relative w-[100%] h-[100%]">
                <div className= {`  w-[100%] flex flex-col transition-container ${currentStep === "size" ? "active" : ""}`}>
                  <div className="flex flex-col mt-[10px]">
                    <div className="mx-auto text-[#ffffff] justify-center flex text-[23px] font-[500] font-Poppins">
                      <p>Please Select Size</p>
                    </div>
                    <div className="flex mt-[0px] mx-auto">
                      <div className="flex items-center gap-3">
                        <div className="h-[2px] w-24 md:w-32 bg-[#fff]" />
                        <div className="w-2 h-2 rounded-full bg-[#fff]" />
                      </div>
                      <i className="fa-solid fa-xmark text-[#fff] mx-[10px]"></i>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#fff]" />
                        <div className="h-[2px] w-24 md:w-32 bg-[#fff]" />
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
                <div className="flex  flex-wrap mt-[20px] px-[17px]  gap-[20px]">
                  {categories1.map((category, index) => (
                    <button
                      key={index}
                      onClick={handleSizeSelection}
                      className="flex w-[148px] px-[10px]  gap-[10px] font-Poppins bg-white text-[#000] mx-auto rounded-[7px] py-[8px]  border-[1px] border-[#fff]"
                    >
                      <b className=" flex font-Poppins  font-[600]">
                        {index + 1}
                      </b>
                      <span className=" flex h-[19px] mt-[1px] w-[1.9px] bg-[#000]"></span>{" "}
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {currentStep === "tiles" && (
              <div className={` relative w-[100%] h-[100%] transition-container ${currentStep === "tiles" ? "active" : ""}`}>
                <div className="w-[100%] flex flex-col">
                  <div className="flex flex-col mt-[10px]">
                    <div className="mx-auto text-[#ffffff] justify-center flex text-[23px] font-[500] font-Poppins">
                      <p>Please Select Tiles</p>
                    </div>
                    <div className="flex mt-[0px] mx-auto">
                      <div className="flex items-center gap-3">
                        <div className="h-[2px] w-24 md:w-32 bg-[#fff]" />
                        <div className="w-2 h-2 rounded-full bg-[#fff]" />
                      </div>
                      <i className="fa-solid fa-xmark text-[#fff] mx-[10px]"></i>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#fff]" />
                        <div className="h-[2px] w-24 md:w-32 bg-[#fff]" />
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
                <div className="flex  flex-wrap mt-[20px] px-[17px]  gap-[20px]">
                  {categories2.map((category, index) => (
                    <button
                      key={index}
                      onClick={handleViewImage}
                      className="flex w-[148px] px-[10px]  gap-[10px] font-Poppins bg-white text-[#000] mx-auto rounded-[7px] py-[8px]  border-[1px] border-[#fff]"
                    >
                      <b className=" flex font-Poppins  font-[600]">
                        {index + 1}
                      </b>
                      <span className=" flex h-[19px] mt-[1px] w-[1.9px] bg-[#000]"></span>{" "}
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ModalContent>
      </NextUIModal>
    </>
  );
}
