import React, { createContext, useState, useEffect, useContext, startTransition, Suspense } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Crop_top from "../models/crop_top";
import Navbar from '../../common/NavBar';
import Jump_suit from "../models/jump_suit";
import CropTopPart from "../part_selection/crop_top_parts";
import Jump_suit_Part from "../part_selection/jump_suit_part";

import { useSelector } from "react-redux";
import Skirt_part from "../part_selection/skirt_parts";
import Skirt from "../models/skirt";
import Loading from "../../common/loading";
import Wclth from "../models/wclth";
import Wclth_Part from "../part_selection/wclth_part";
import Basic_shirt_part from "../part_selection/basic_shirt_parts";
import Basic_shirt from "../models/basic_shirt";
import style from './product3.module.css';




const materialType = [
  { id: 1, material: "cotton" },
  { id: 2, material: "polyster" },
  { id: 3, material: "Denim" },
  { id: 4, material: "corduroy" },
  { id: 5, material: "knitted fabric" },
  { id: 6, material: "lycra" },
  { id: 7, material: "hacob" },
  { id: 8, material: "linen" },
  { id: 9, material: "velvet" },
  { id: 10, material: "rayon" },
  { id: 11, material: "georgette" },
  { id: 12, material: "crepe" },
  { id: 13, material: "hacoba" },
  { id: 14, material: "spandes" },
  { id: 15, material: "satin" },
];

const buttonType = [
  { id: 1, color: "bg-white" },
  { id: 2, color: "bg-black" },
  { id: 3, color: "bg-red-700" },
  { id: 4, color: "bg-orange-600" },
  { id: 5, color: "bg-amber-400" },
  { id: 6, color: "bg-yellow-900" },
  { id: 7, color: "bg-lime-500" },
  { id: 8, color: "bg-green-800" },
  { id: 9, color: "bg-teal-300" },
  { id: 10, color: "bg-cyan-500" },
  { id: 11, color: "bg-sky-400" },
  { id: 12, color: "bg-rose-600" },
];


export default function ProductScreen() {

  const routeModelSelected = useSelector((state) => state.model.routeModelSelected);

const selectedPart=useSelector((state)=>state.modelparts.selectedPart) 

  const [showMaterials, setShowMaterials] = useState(false);
  const [showButtonTypes, setShowButtonTypes] = useState(false);
  const [material, setMaterial] = useState("none");
  const [button, setButton] = useState("bg-black");
  const [color, setColor] = useState("bg-white");
  const [currentImages, setCurrentImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
   
  }, [routeModelSelected,selectedPart]);


  async function fetchMaterialImages(material) {
    try {
     
     const response = await fetch(`http://13.201.251.105/api/material/get/image/${material}`, {
   //   const response = await fetch(`http://localhost:3000/api/material/get/image/${material}`, {
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const images = await response.json();
      const imageUrls = images.map(image => `data:${image.contentType};base64,${image.data}`);
      return imageUrls;
    } catch (error) {
      console.error("Error fetching material images:", error);
      return [];
    }
  }

  function handleButtonType() {

      setShowButtonTypes(!showButtonTypes);
      if (showMaterials) {
        setShowMaterials(false);
      }

  }

  function handleMaterials() {

      setShowMaterials(!showMaterials);
      if (showButtonTypes) {
        setShowButtonTypes(false);
      }
  
  }

  async function handleMaterialClick(material) {

      setMaterial(material);
      setColor("bg-white"); // Reset color when changing material
      const images = await fetchMaterialImages(material);
      setCurrentImages(images);
 
  }

  function handleImageSelected(image) {
 
    setSelectedImage(image);
  }

  return (
    <>
     
        <Navbar />
        <div className="w-full flex flex-col gap-5 justify-center items-center mt-10 px-2 py-10 md:p-10">
          <div className={`${style.modelContainer}py-5 px-10 md:p-5  rounded-lg" style={{ width: '1600px', height: '500px' ,backgroundColor: 'black'}}`}>
           
   
 
     
    {routeModelSelected === "crop_top" && (
      <Suspense fallback={<Loading/>}>
        <Crop_top url="https://3dimensionaldilu.s3.ap-south-1.amazonaws.com/model.gltf" textureUrl={selectedImage} selectedpart={selectedPart} />
      </Suspense>
    )}
    {routeModelSelected === "jump_suit" && (
      <Suspense fallback={<Loading/>}>
        <Jump_suit url="https://3dimensionaldilu.s3.ap-south-1.amazonaws.com/updated_jumpsuit.gltf" textureUrl={selectedImage} selectedpart={selectedPart} />
      </Suspense>
    )}
 {routeModelSelected === "skirt" && (
      <Suspense fallback={<Loading/>}>
        <Skirt url="https://3dimensionaldilu.s3.ap-south-1.amazonaws.com/1723244474614-skirt.gltf" textureUrl={selectedImage} selectedpart={selectedPart} />
      </Suspense>
    )}
   {routeModelSelected === "wclth" && (
      <Suspense fallback={<Loading/>}>
        <Wclth url="https://3dimensionaldilu.s3.ap-south-1.amazonaws.com/wclth.gltf" textureUrl={selectedImage} selectedpart={selectedPart} />
      </Suspense>
    )}
      {routeModelSelected === "basic_shirt" && (
      <Suspense fallback={<Loading/>}>
        <Basic_shirt url="https://3dimensionaldilu.s3.ap-south-1.amazonaws.com/basic_shirt.gltf" textureUrl={selectedImage} selectedpart={selectedPart} />
      </Suspense>
    )}
  



           
          </div>
          <div className={`${style.controlpanel}bg-zinc-800 w-full py-5 p-2 md:p-5 rounded-t-3xl`}>
            <div className={`${style.canvas}flex flex-col md:flex-row gap-5 justify-between md:items-center`}>
              <div className="flex gap-3 md:ms-5">
                <button
                  onClick={handleMaterials}
                  className={`${style.buttonbuy}flex justify-between items-center text-sm bg-neutral-500 text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link`}
                >
                  <span>MATERIALS</span>
                  <span className="md:text-xl">
                    {showMaterials ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </span>
                </button>
                <button
                  onClick={handleButtonType}
                  className={`${style.button}flex justify-between items-center text-sm bg-neutral-500 text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link`}
                >
                  <span>BUTTON TYPE</span>
                  <span className="text-xl">
                    {showButtonTypes ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </span>
                </button>
              </div>
              <div className="flex gap-3 me-5">
                <button className={`${style.buttonprev}bg-neutral-500 text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link`}>
                  PREVIOUS
                </button>
                <button className={`${style.buttonNext}bg-neutral-500 text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link`}>
                  BUY
                </button>
              </div>
            </div>
            {showMaterials && (
              <div className={`${style.mateiralgrid}p-5 grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6`}>
                {materialType.map((x) => (
                  <div className="relative flex flex-col " key={x.id}>
                    {material === x.material && currentImages.length > 0 && (
                      currentImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Material ${x.material} ${index + 1}`}
                          className="w-20 h-20 object-cover cursor-pointer "
                          onClick={() => handleImageSelected(image)}
                        />
                      ))
                    )}
                    <button
                      onClick={() => handleMaterialClick(x.material)}
                      className="w-full bg-neutral-900 text-zinc-200 p-3 rounded-md hover:bg-neutral-600 hover:shadow-md hover:shadow-zinc-300 nav-link"
                    >
                      <div className="flex justify-between item-center w-full">
                        <span>{x.material.toUpperCase()}</span>
                        <span className="md:text-xl">
                          <IoMdArrowDropup />
                        </span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            )}
            {showButtonTypes && (
              <div className="p-5 grid gap-2 grid-cols-3 md:grid-cols-6">
                {buttonType.map((x) => (
                  <div
                    key={x.id}
                    onClick={() => setButton(x.color)}
                    className={`${x.color} w-10 h-10 rounded-full m-3 cursor-pointer hover:w-11`}
                  ></div>
                ))}
              </div>
            )}

{routeModelSelected === "crop_top" && (
 <Suspense fallback={<Loading/>}>
            <CropTopPart/>
            </Suspense>
            
            )}
            {routeModelSelected === "jump_suit" && (
 <Suspense fallback={<Loading/>}>
            <Jump_suit_Part/>
            </Suspense>
            
            )}
                        {routeModelSelected === "skirt" && (
 <Suspense fallback={<Loading/>}>
            <Skirt_part/>
            </Suspense>
            
            )}

{routeModelSelected === "wclth" && (
 <Suspense fallback={<Loading/>}>
            <Wclth_Part/>
            </Suspense>
            
            )}
            {routeModelSelected === "basic_shirt" && (
 <Suspense fallback={<Loading/>}>
            <Basic_shirt_part/>
            </Suspense>
            
            )}


            <h1 className="p-5 text-zinc-200 flex gap-2 items-center">
              Material Selected: {material}{" "}
              <div className={`${style.material}w-5 h-5 rounded-full ${color}`}></div>
            </h1>
            <h1 className="px-5 text-zinc-200 flex gap-2 items-center" >
              Button : <div className={`${style.button}w-5 h-5 rounded-full ${button}`}></div>
            </h1>
          </div>
        </div>
      
    </>
  );
}
