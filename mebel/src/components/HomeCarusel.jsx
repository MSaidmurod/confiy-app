import React from "react";
import { NavLink } from "react-router-dom";

function HomeCarusel() {
  return (
    <div className="flex px-5 justify-between  mt-20">
      <div className="w-[500px] flex justify-end flex-col gap-10">
        <h1 className="text-6xl max-md:text-4xl font-bold">
          We are changing the way people shop
        </h1>
        <p className="text-lg ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <NavLink>
          <button className="btn btn-primary">Our products</button>
        </NavLink>
      </div>
      <div className="max-lg:hidden">
        <div className="carousel carousel-item max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item pl-3">
            <img
              className="h-[400px]  w-[300px] object-cover rounded-box"
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
            />
          </div>
          <div className="carousel-item">
            <img
              className="h-[400px] w-[300px] object-cover rounded-box"
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
            />
          </div>
          <div className="carousel-item">
            <img
              className="h-[400px] w-[300px] object-cover rounded-box"
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
            />
          </div>
          <div className="carousel-item">
            <img
              className="h-[400px] w-[300px] object-cover rounded-box"
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarusel;
