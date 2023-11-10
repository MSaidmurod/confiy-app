import React from "react";
import HomeCarusel from "../components/HomeCarusel";
import HomeProducts from "../components/HomeProducts";
import { useFetch } from "../hook/useFetch";
import Error from "../components/Error";

function Home() {
  const { data, isPending, error } = useFetch(
    "https://strapi-store-server.onrender.com/api/products?featured=true"
  );
  if (isPending) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <HomeCarusel />
      <div className="mt-28 px-5">
        <div className="border-b-2  ">
          <h1 className="font-bold text-3xl pb-4">Featured Products</h1>
        </div>
        <HomeProducts data={data} />
      </div>
    </div>
  );
}

export default Home;
