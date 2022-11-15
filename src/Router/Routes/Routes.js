import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SingUp from "../../Pages/SignUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5001/services/${params.id}`);
        
        },
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
