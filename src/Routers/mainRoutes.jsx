// src/routes/mainRoutes.jsx
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Foods from "../pages/Foods";
import FoodDetails from "../pages/fronted/FoodDetails/FoodDetails";
import AddFood from "../pages/AddFood";
import ManageFoods from "../pages/ManageFoods";
import MyRequests from "../pages/MyRequests";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profiles";
import TestProfile from "../test/TestProfile";
import CustomerReview from "../test/CustomerReview";
import Review from "../test/Review";
import Contact from "@/pages/fronted/contact/Contact";
import PortfolioGrid from "@/pages/PortfolioGrid";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "foods", element: <Foods /> },
      { path: "contact", element: <Contact /> },
      { path: "foods/:id", element:<div><FoodDetails /></div> },
      { path: "add-food", element: <><AddFood /></> },
      { path: "manage-foods", element: <PrivateRoute><ManageFoods /></PrivateRoute> },
      { path: "my-requests", element: <PrivateRoute><MyRequests /></PrivateRoute> },
      { path: "registration", element: <Register /> },
      { path: "contributor", element: <PortfolioGrid /> },
      { path: "profile", element: <PrivateRoute><Profile /></PrivateRoute> },
      { path: "login", element: <Login /> },




      { path: "TestProfile", element: <TestProfile /> },
      { path: "rrr", element: <Review /> },
    ],
  },
]);

export default mainRoutes;