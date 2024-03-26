import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './Styles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import  P from './OurComponents/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/ContactUs",
    element:<ContactUs/>
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>
  },
  {
    path: "/Sidebar",
    element:<NavBar/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
