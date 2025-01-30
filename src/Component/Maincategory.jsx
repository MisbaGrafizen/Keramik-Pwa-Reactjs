import React, { useEffect, useState } from "react";
import { Modal as NextUIModal, ModalContent} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategroyAction } from "../redux/action/landingManagement";
import { getSubcategoriesByCategoryAction } from "../redux/action/landingManagement";
import { getProductBySubCategoryAction } from "../redux/action/landingManagement";
import img1 from "../../public/imges/login-bg.png"

export default function MainCategory() {
  const [caratModalOpen, setCaratModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);


const navigate =useNavigate();
const dispatch = useDispatch();

const categories = useSelector((state) => state.landing.getAllCategory);

useEffect(() => {
  dispatch(getCategroyAction());
}, [dispatch]);


const handleCategoryClick = async (categoryId) => {
  setSelectedCategoryId(categoryId);
  try {
    const response = await dispatch(getSubcategoriesByCategoryAction(categoryId)); 
    setSubcategories(response); 
    setCaratModalOpen(true);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
  }
};

const handleSubcategoryClick = async (subcategoryId) => {
  setSelectedSubcategoryId(subcategoryId);
  try {
    const response = await dispatch(getProductBySubCategoryAction(subcategoryId));
    setProducts(response);
    setCurrentStep("tiles");   
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};


const handleViewImage = (productId) => {
  console.log('productId', productId)
  navigate("/image", { state: { productId } });
};


  const handleModalClose = () => {
    setCaratModalOpen(false);
  };

  console.log('products', products)

  const [currentStep, setCurrentStep] = useState("size");


  return (
    <>
      <div className="flex w-[100%]  pt-[120px] px-[20px]">
        <div className="grid grid-cols-2 gap-[15px] w-[100%] mx-auto">
          {categories.map((category, index) => (
            <>
            <div className="  rounded-[7px] flex relative ">

    <img className=" flex w-[100%] rounded-[7px]   object-cover h-[180px]" src={category?.image} />
       
            <button
              key={index}
              onClick={() => handleCategoryClick(category._id)}
              className="flex w-[100%] px-[10px]  gap-[10px] bottom-0 button111  absolute font-Poppins bg-white text-[#fff] mx-auto rounded-[7px] py-[8px]  border-t-[1px] border-[#fff]"
            >
              <b className=" flex font-Poppins  font-[600]">{index + 1}</b>
              <span className=" flex h-[19px] w-[1.9px] bg-[#fff]"></span>{" "}
              {category?.name}
            </button>
            </div>

            </>
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
                  {subcategories?.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleSubcategoryClick(category._id)}
                      className="flex w-[148px] px-[10px]  gap-[10px] font-Poppins bg-white text-[#000] mx-auto rounded-[7px] py-[8px]  border-[1px] border-[#fff]"
                    >
                      <b className=" flex font-Poppins  font-[600]">
                        {index + 1}
                      </b>
                      <span className=" flex h-[19px] mt-[1px] w-[1.9px] bg-[#000]"></span>{" "}
                      {category?.name}
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
                  {products?.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => handleViewImage(product._id)}
                      className="flex w-[148px] px-[10px]  gap-[10px] font-Poppins bg-white text-[#000] mx-auto rounded-[7px] py-[8px]  border-[1px] border-[#fff]"
                    >
                      <b className=" flex font-Poppins  font-[600]">
                        {index + 1}
                      </b>
                      <span className=" flex h-[19px] mt-[1px] w-[1.9px] bg-[#000]"></span>{" "}
                      {product?.name}
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
