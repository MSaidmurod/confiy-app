import { signUpWithGoogle } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../redux/feature/configSlice";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const dispatch = useDispatch();
  const loginWithGoogle = () => {
    signUpWithGoogle()
      .then((restul) => {
        dispatch(login(restul.addUser));
        toast.success("user updated!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-7xl flex items-center justify-center flex-col mx-auto">
      <div className="card w-96 bg-base-100 mt-28 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="font-bold">Login With Google</h1>

          <button onClick={loginWithGoogle} className="btn btn-normal">
            <FcGoogle className="text-xl" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
