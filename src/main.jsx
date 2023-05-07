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
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Register from './Components/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import Items from './Components/Items/Items';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar></Navbar>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:() =>fetch('https://kitchen-genius-server-nafisofficial.vercel.app/chefs'),
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/chefs/:id",
        element:<PrivateRoute><Items></Items></PrivateRoute>,
        loader:({params})=>fetch(`https://kitchen-genius-server-nafisofficial.vercel.app/chefs/${params.id}`)
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
