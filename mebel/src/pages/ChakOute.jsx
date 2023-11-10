import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeCart, addName } from "../redux/feature/configSlice";
import { useState } from "react";
import { useEffect } from "react";

function ChakOute() {
  const { cartItems, orderTotal, cartTotal, tax, shipping } = useSelector(
    (store) => store.config
  );
  const dispatch = useDispatch();
  return (
    <div className="max-w-6xl mt-16  mx-auto">
      <div className="border-b-2 mx-5 max-lg:mx-5 mt-5">
        <h1 className="text-3xl pb-3  font-bold">Place Your Order</h1>
      </div>

      {cartItems.length == 0 ? (
        ""
      ) : (
        <div className="flex gap-10 mt-9  justify-between px-5 max-md:flex-col">
          <div className="w-full  ">
            <h1 className="text-xl mb-5 font-bold">Shopping Information</h1>
            <form className="flex flex-col gap-9">
              <label>
                <span className="text-xs pb-2">Frist Name</span>
                <input
                  type="text"
                  required
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-full"
                />
              </label>
              <label>
                <span className="text-xs pb-2">Address</span>
                <input
                  type="text"
                  required
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-full"
                />
              </label>
              <NavLink className="" to="/orders">
                <button
                  onClick={() => dispatch(removeCart(cartItems))}
                  className="btn w-full btn-primary"
                >
                  Place your order
                </button>
              </NavLink>
            </form>
          </div>
          <div className="card w-[900px] h-48 max-lg:w-full mb-3 flex flex-col gap-3 px-4 border bg-base-100 py-5 shadow-2xl">
            <div className="border-b-2 px-4 flex justify-between">
              <h1>Subtotal</h1>
              <span>${cartTotal.toFixed(2) * -1}</span>
            </div>
            <div className="border-b-2 px-4 flex justify-between">
              <h1>Shipping</h1>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="border-b-2 px-4 flex justify-between">
              <h1>Tax</h1>
              <span>${tax.toFixed(2) * -1}</span>
            </div>
            <div className="border-b-2 px-4 flex justify-between">
              <h1>OrderTotal</h1>
              <span>${orderTotal.toFixed(2) * -1}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChakOute;
