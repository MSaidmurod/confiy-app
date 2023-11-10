import { BiGridAlt, BiMenu } from "react-icons/bi";
import HomeProducts from "../components/HomeProducts";
import { useFetch } from "../hook/useFetch";
import { useEffect, useState } from "react";
import ColumPage from "./ColumPage";
import { useParams } from "react-router-dom";
function ProductAll({ data, setUrl }) {
  const pages = data && data.meta.pagination.pageCount;
  const [colum, setColum] = useState(true);
  const total = data && data.meta.pagination.total;
  const btnActive = (pattern) => {
    return `text btn btn-circle text-sm ${
      pattern === colum
        ? "btn-primary btn-primary-content"
        : "btn-ghost btn-base-content"
    }`;
  };

  if (total === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">
          Sorry, no products matched your search...
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex border-b-2 pb-4 mt-16 justify-between">
        <h1>{data && data.meta.pagination.total} products</h1>
        <div className="flex gap-2">
          <button
            type="button"
            className={btnActive(true)}
            onClick={() => setColum(true)}
          >
            <BiGridAlt className="text-2xl" />
          </button>
          <button
            type="button"
            className={btnActive(false)}
            onClick={() => setColum(false)}
          >
            <BiMenu className="text-2xl" />
          </button>
        </div>
      </div>
      {colum && <HomeProducts data={data} />}
      {!colum && <ColumPage data={data} />}

      <div className="text-end mb-20">
        <div className="join">
          <button
            onClick={() =>
              setUrl(
                `https://strapi-store-server.onrender.com/api/products?page=1`
              )
            }
            className="join-item btn "
          >
            1
          </button>
          <button
            onClick={() =>
              setUrl(
                `https://strapi-store-server.onrender.com/api/products?page=2`
              )
            }
            className="join-item btn "
          >
            2
          </button>
          <button
            onClick={() =>
              setUrl(
                `https://strapi-store-server.onrender.com/api/products?page=3`
              )
            }
            className="join-item btn "
          >
            3
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductAll;
