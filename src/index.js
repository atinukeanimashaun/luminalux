import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './layouts/Home.jsx';
import Blogs from './layouts/Blogs.jsx';
import About from './layouts/About.jsx';
import Contact from './layouts/Contact.jsx';
import Shop from './layouts/Shop.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import UpdateProfile from './components/UpdateProfile.jsx';
import BlogDetails from './layouts/BlogDetails.jsx';
import ProductDetails from './layouts/ProductDetails.jsx';
import Checkout from './layouts/CheckoutsPage.jsx';
import { Provider } from 'react-redux'
import store from './store.js';
import MyCart from './layouts/MyCart.jsx';
import ReturnPolicy from './layouts/ReturnPolicy.jsx';
import Terms from './layouts/Terms.jsx';
import BookConsultation from './layouts/BookConsultation.jsx';
import Login from './components/LoginModal.jsx/Login.jsx';
import SignIn from './components/LoginModal.jsx/SignIn.jsx';
import Order from './layouts/Order.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "blog",
    element: <Blogs />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "/update-Profile",
    element: <UpdateProfile />
  },
  {
    path: "/item/:id",
    element: <BlogDetails/>
  },
  {
     path: "/product/:id",
     element: <ProductDetails />
  },
  {
     path: "/checkout",
     element: <Checkout />
  },
  {
    path: "/mycart",
    element: <MyCart />
  },
  {
    path: "/return",
    element: <ReturnPolicy />
  },
  {
    path: "/terms",
    element: <Terms />
  },
  {
    path: "/bookconsultation",
    element: <BookConsultation />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/order",
    element: <Order />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </AuthProvider>,
);