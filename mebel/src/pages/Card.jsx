import { useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";
import { NavLink } from "react-router-dom";

function Card() {
  const { cartItems, orderTotal, cartTotal, tax, shipping } = useSelector(
    (store) => store.config
  );
  return (
    <div className="max-w-6xl mt-16 mx-auto">
      <div className="border-b-2 max-lg:mx-5 mt-5">
        <h1 className="text-3xl pb-3  font-bold">Shopping Cart</h1>
      </div>
      {cartItems.length == 0 ? (
        ""
      ) : (
        <div className="flex gap-9 mt-5 justify-between px-5 max-lg:flex-col">
          <CardProduct cartItems={cartItems} />
          <div className="card w-96 h-48 max-lg:w-full mb-3 flex flex-col gap-3 px-4 border bg-base-100 py-5 shadow-2xl">
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
            <NavLink to="/checkout">
              <button className="btn mt-16 w-full btn-primary">
                proceed checkout
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
