import React from 'react'
import InnerBgImg from "../assets/header-bg.jpg"
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const HeroBanner = () => {
    const dispatch = useDispatch();
  return (
    <><header className="mb-10">
    <div className="w-full bg-center bg-cover"
      style={{ backgroundImage: "url(" + InnerBgImg +")" }}>
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
        <div className="text-center">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-gray-200 font-semibold uppercase tracking-widest">New feature</span>
              <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100 uppercase">King Fast food</h2>
              <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
              For those who don’t have time to cook, we’ve got you covered.
              </p>
          
<div className="relative text-gray-600">
  <input type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))} className="bg-[#00000096] h-20 px-5 pr-10 rounded-full w-full text-sm focus:outline-none border-[#95919196] border-2" />
  <button type="submit" className="absolute right-0 top-3 mt-3  mr-4 text-lg">
    <IoIosSearch className='text-4xl'/>
  </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header></>
  )
}

export default HeroBanner