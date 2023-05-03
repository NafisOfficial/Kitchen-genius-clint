import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Components/Login/Login';
import Authprovider from './Provider/Authprovider';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/blog",
    element:<Blog></Blog>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
