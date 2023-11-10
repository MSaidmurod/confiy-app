import { useState } from "react";
import { numbers } from "../components/number.js";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../redux/feature/configSlice";

function CardProduct({ cartItems }) {
  const dispatch = useDispatch();

  return (
    <div className="grid mt-5 gap-4">
      {cartItems &&
        cartItems.map((pro) => {
          const { productID } = pro;

          return (
            <div
              key={productID}
              className="card grid    overflow-hidden max-w-full card-side bg-base-100 "
            >
              <div className="flex gap-16 justify-center shadow-xl  max-md:flex-col  px-5 py-4 items-start">
                <figure>
                  <img
                    className="w-[150px] hover:scale-105 rounded-2xl px-3 py-3 h-[150px] object-cover"
                    src={pro.image}
                    alt="Movie"
                  />
                </figure>
                <div className="">
                  <h2 className="card-title hover:scale-100">
                    {pro.title.toUpperCase()}
                  </h2>
                  <p>{pro.company}</p>
                  <p className=" flex items-center">
                    Color:{" "}
                    <button
                      style={{ background: pro.productColor }}
                      className="badge h-4 w-4 mr-2"
                    ></button>
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-ms  mb-2">Amount</span>
                  <select
                    onChange={(e) =>
                      dispatch(
                        editItem({
                          cartId: pro.cartId,
                          amount: parseInt(e.target.value),
                        })
                      )
                    }
                    className="select mb-4 select-info select-xs w-16 max-w-xs"
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
                    onClick={() => {
                      dispatch(removeItem({ productID }));
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    remove
                  </button>
                </div>
                <div className="card-actions justify-end">
                  <p className="px-4 py-4">${pro.price}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CardProduct;
