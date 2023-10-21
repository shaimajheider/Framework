import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import{createBrowserRouter,createHashRouter,Navigate,RouterProvider} from 'react-router-dom'
import Layout from './Compoent/layout/Layout'
import Home from './Compoent/Home/Home'
import About from './Compoent/About/About'
import Portfolio from './Compoent/Portfolio/Portfolio'
import Contact from './Compoent/Contact/Contact'

export default function App() {

  let routers = createHashRouter([
    {path:'',element:<Layout/>,children:[
      {path:'',element:<Navigate to={'home'}/>},
      {path:'home',element:<Home/>},
      {path:'About',element:<About/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'Contact',element:<Contact/>}]

  }

  ])
  return (
    <RouterProvider router={routers}>

    </RouterProvider>
  )
}

