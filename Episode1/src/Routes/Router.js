import App from "../App";
import About from "../components/About";
import Body from "../components/Body";
import Contact from "../components/ContactUs";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/restaurant/:resId",
      //   element: <RestaurantMenu />,
      // },
    ],
    errorElement: <Error />,
  },
]);

export default Router;