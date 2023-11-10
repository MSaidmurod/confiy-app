// r-r-d
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// layout
import MainLayout from "./layout/MainLayout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import ReadMore from "./components/ReadMore";
import Products from "./pages/Products";
import Card from "./pages/Card";
import Login from "./pages/Login";
import ChakOute from "./pages/ChakOute";
import Order from "./pages/Order";
import { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { login, authReady } from "./redux/feature/configSlice";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { authisReady, addUser } = useSelector((store) => store.config);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes addUser={addUser}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/readmore/:id",
          element: <ReadMore />,
        },
        {
          path: "/product",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Card />,
        },
        {
          path: "/checkout",
          element: <ChakOute />,
        },
        {
          path: "/orders",
          element: <Order />,
        },
      ],
    },
    {
      path: "/login",
      element: <> {addUser ? <Navigate to="/" /> : <Login />} </>,
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (addUser) => {
      dispatch(login(addUser));
      dispatch(authReady());
    });
  }, [dispatch]);

  return <>{authisReady && <RouterProvider router={routes} />}</>;
}

export default App;
