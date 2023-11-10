import React from "react";
import { NavLink } from "react-router-dom";

function ColumPage({ data }) {
  return (
    <div className="grid  gap-4 my-16">
      {data &&
        data.data.map((pro) => {
          const { price } = pro.attributes;
          const dolPrice = price / 100;
          return (
            <NavLink key={pro.id} to={`/readmore/${pro.id}`}>
              <div className="card grid   cursor-pointer  border overflow-hidden max-w-full card-side bg-base-100 shadow-xl hover:shadow-2xl">
                <div className="flex shadow-xl max-md:flex-col  px-5 py-4 items-start">
                  <figure>
                    <img
                      className="w-[150px] hover:scale-105 rounded-2xl px-3 py-3 h-[150px] object-cover"
                      src={pro.attributes.image}
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title hover:scale-100">
                      {pro.attributes.title.toUpperCase()}
                    </h2>
                    <p>{pro.attributes.company}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <p className="px-4 py-4">${dolPrice}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
}

export default ColumPage;
