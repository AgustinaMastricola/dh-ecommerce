import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutMain from './components/layouts/LayoutMain.tsx'
import './index.css'
import Cart from './pages/cart/Cart.tsx'
import Home from './pages/home/Home.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/cart', element: <Cart/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
    {/* <App /> */}
  </React.StrictMode>,
)
