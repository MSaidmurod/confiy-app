import { NavLink } from "react-router-dom"

function Error() {
  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-col mt-[10%] gap-3 justify-center items-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-3xl font-bold">Page Not Found</p>
        <NavLink to='/'><button className="btn btn-info">Back Home</button></NavLink>
      </div>
    </div>
  )
}

export default Error