import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { numbers } from "./number";
import { useState } from "react";
import Error from "../components/Error";
//icons
import { MdOutlineNavigateNext } from "react-icons/md";

//loader
import "ldrs/pulsar";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/feature/configSlice";

function ReadMore() {
  const dispatch = useDispatch();
  const [count, setcount] = useState(1);
  const id = useParams();
  const { data, isPending, error } = useFetch(
    `https://strapi-store-server.onrender.com/api/products/${id.id}`
  );

  const [productColor, setProductColor] = useState();

  const createProduct = {
    cartID: data && data.data.id + productColor,
    productID: data && data.data.id,
    image: data && data.data.attributes.image,
    title: data && data.data.attributes.title,
    price: data && data.data.attributes.price / 100,
    amount: count,
    productColor,
    company: data && data.data.attributes.company,
  };

  const addToCart = () => {
    dispatch(addItem({ product: createProduct }));
  };

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
    <div className="max-w-6xl  px-4 max-lg:mx-4 mx-auto">
      <div className="flex mb-5 mt-24 items-center">
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <MdOutlineNavigateNext className="text-xl" />
        <NavLink to="/product">
          <h1>Products</h1>
        </NavLink>
      </div>
      <div className="flex items-start max-lg:flex-col justify-between">
        <div className=" ">
          <img
            className=" rounded-2xl  object-cover h-[400px]"
            width={1900}
            src={data && data.data.attributes.image}
            alt="mebel"
          />
        </div>
        <div className=" max-lg:mt-4 max-lg:ml-0 ml-20 flex flex-col">
          <h1 className="text-3xl  font-bold">
            {data && data.data.attributes.title.toUpperCase()}
          </h1>
          <p className="text-xl mt-2 font-bold text-slate-400">
            {data && data.data.attributes.company}
          </p>
          <p className="text-xl mt-2">
            ${data && data.data.attributes.price / 100}
          </p>
          <p className="mt-4">{data && data.data.attributes.description}</p>
          <h1 className="text-ms mt-6 mb-2 font-bold">Colors</h1>
          <div className="flex mb-7 gap-2">
            {data &&
              data.data.attributes.colors.map((color) => {
                return (
                  <button
                    key={color}
                    onClick={() => setProductColor(color)}
                    style={{ background: color }}
                    className={`badge h-6 w-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                  ></button>
                );
              })}
          </div>
          <span className="text-ms font-bold mb-2">Amount</span>
          <select
            onChange={(e) => {
              setcount(e.target.value);
            }}
            className="select select-info w-full max-w-xs"
          >
            {numbers.map((number) => {
              return (
                <option key={number} value={number}>
                  {number}
                </option>
              );
            })}
          </select>
          <button
            onClick={addToCart}
            className="btn mb-20 btn-primary mt-9 w-[150px]"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadMore;
