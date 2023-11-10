import { useState } from "react";

function SearchProduct({ data, setUrl }) {
  const [range, setRange] = useState(100000);
  const [catigor, setCatigor] = useState("all");
  const [search, setSearch] = useState("s");
  const [select, setSelect] = useState("all");
  const [order, setOrder] = useState("a-z");
  const [checkbox, setChecbox] = useState(false);

  const SubmitSearchApi = (e) => {
    e.preventDefault();
    setUrl(
      `https://strapi-store-server.onrender.com/api/products?search=${search}&category=${catigor}&company=${select}&order=${order}$&price=${range}&shipping=${checkbox}`
    );
  };
  const restartSubmit = (e) => {
    e.preventDefault();
    setCatigor("all");
    setChecbox(false);
    setOrder("a-z");
    setSearch("");
    setRange(100000);
    setUrl("https://strapi-store-server.onrender.com/api/products?page=1");
  };
  return (
    <div>
      <div className="shadow-2xl  rounded-2xl px-5 py-4 mt-20">
        <form className="grid select-none gap-y-16 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-x-4 grid-cols-4 ">
          <label>
            <h1 className="mb-2 text-sm ">Search Product</h1>
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Type here"
              className="input input-bordered input-sm w-full max-w-full"
            />
          </label>

          <label>
            <h1 className="text-sm mb-2">Select Categori</h1>
            <select
              onChange={(e) => {
                setCatigor(e.target.value);
              }}
              className="select select-bordered select-sm w-full max-w-full"
            >
              {data &&
                data.meta.categories.map((cat) => {
                  return (
                    <option key={cat} value={cat.toLowerCase()}>
                      {cat}
                    </option>
                  );
                })}
            </select>
          </label>

          <label>
            <h1 className="text-sm mb-2">Select Company</h1>
            <select
              onChange={(e) => {
                setSelect(e.target.value);
              }}
              className="select select-bordered select-sm w-full max-w-full"
            >
              {data &&
                data.meta.companies.map((cat) => {
                  return (
                    <option key={cat} value={cat.toLowerCase()}>
                      {cat}
                    </option>
                  );
                })}
            </select>
          </label>

          <label>
            <h1 className="text-sm mb-2">Sort By</h1>
            <select
              onChange={(e) => {
                setOrder(e.target.value);
              }}
              className="select select-bordered select-sm w-full max-w-full"
            >
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="high">high</option>
              <option value="low">low</option>
            </select>
          </label>

          <label>
            <div className="flex justify-between">
              <h1>Select Price</h1>
              <h1>${range}</h1>
            </div>
            <input
              type="range"
              onChange={(e) => {
                setRange(e.target.value);
              }}
              value={range}
              min={0}
              max={100000}
              className="w-full range range-primary"
            />
            <div className="flex justify-between">
              <h1>0</h1>
              <h1>Max: $10000</h1>
            </div>
          </label>

          <label
            onClick={() => {
              setChecbox(!checkbox);
            }}
            className="cursor-pointer flex flex-col label"
          >
            <span className="label-text">Free Shopping</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>

          <button onClick={SubmitSearchApi} className="btn btn-primary">
            search
          </button>
          <button onClick={restartSubmit} className="btn btn-accent">
            reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchProduct;
