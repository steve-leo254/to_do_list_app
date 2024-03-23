import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './OurComponents/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/contact",
    element:<ContactUs/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
