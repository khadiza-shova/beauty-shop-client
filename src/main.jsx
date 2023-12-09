import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Route/Route.jsx';
import AuthProvides from './Providers/AuthProvides.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvides>
      <RouterProvider router={Route}>

      </RouterProvider>
    </AuthProvides>
  </React.StrictMode>,
)
