import { NavLink } from "react-router-dom";

function HomeProducts({ data }) {
  return (
    <div>
      <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-20  mb-28">
        {data &&
          data.data.map((mebel) => {
            const { id } = mebel;
            const { price } = mebel.attributes;
            const dolPrice = price / 100;
            return (
              <li key={mebel.id}>
                <NavLink to={`/readmore/${id}`}>
                  <div className="card hover:shadow-2xl overflow-hidden  bg-base-100 shadow-lg">
                    <figure className="px-10 pt-10">
                      <img
                        src={mebel.attributes.image}
                        alt="Shoes"
                        className="rounded-xl h-[200px] w-[400px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">
                        {mebel.attributes.title.toUpperCase()}
                      </h2>
                      <p>${dolPrice}</p>
                    </div>
                  </div>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default HomeProducts;
