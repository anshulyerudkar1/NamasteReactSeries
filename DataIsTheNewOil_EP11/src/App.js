import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import About from "./components/About.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery.js";

// Code chunking
// Code splitting
// Dynamic bundling
// Lazy Loading
// On demand loading
// Dynamic import

const Grocery = lazy(() => import("./components/Grocery.js"));

const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  //Authentication
  const { userName, setUserName } = useState();

  useEffect(() => {
    // make an API call to get the user info
    const data = {
      name: "Anshul Y",
    };
    setUserName(data);
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
