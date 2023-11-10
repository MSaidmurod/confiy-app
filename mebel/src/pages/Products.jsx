import React, { useState } from "react";
import ProductAll from "../components/ProductAll";
import { useFetch } from "../hook/useFetch";
import SearchProduct from "../components/SearchProduct";
import Error from "../components/Error";
function Products() {
  const [url, setUrl] = useState(
    `https://strapi-store-server.onrender.com/api/products?page=1`
  );
  const { data, isPending, error } = useFetch(url);
  if (error) {
    return <Error />;
  }

  if (isPending) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl px-5 mx-auto">
      <SearchProduct data={data} setUrl={setUrl} />
      <ProductAll data={data} setUrl={setUrl} />
    </div>
  );
}

export default Products;
