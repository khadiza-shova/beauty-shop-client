import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import AddProduct from '../Pages/AddProduct';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MyCart from '../Pages/MyCart';
import BrandProduct from '../Pages/BrandProduct';
import ProductDetails from '../Pages/ProductDetails';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/ErrorPage';
import UpdateProduct from '../Pages/UpdateProduct';


    const Route =createBrowserRouter([
        {
            path:"/",
            element:<Layout></Layout>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/addProduct",
                    element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                },
                {
                    path:"/products/:brandName",
                    element:<BrandProduct></BrandProduct>,
                },
                {
                    path:"/products/:brandName/productDetails/:id",
                    element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                    loader:({params})=>fetch(`https://beaufly-shop-server.vercel.app/products/${params.brandName}/productDetails/${params.id}`)
                },
                {
                    path:"/login",
                    element:<Login></Login>
                },

                {
                    path:"/register",
                    element:<Register></Register>
                }
                ,{
                    path:"/cart",
                    element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                    loader:()=>fetch("https://beaufly-shop-server.vercel.app/cart")
                },
                {
                    path:"/products/:brandName/update/:id",
                    element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                    loader:({params})=>fetch(`https://beaufly-shop-server.vercel.app/products/${params.brandName}/update/${params.id}`)
                }
            ]
        }
    ])
  


export default Route;