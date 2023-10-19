import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutMain from './components/layouts/LayoutMain.tsx'
import './index.css'
import Home from './pages/home/Home.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import Checkout from './pages/checkout/Checkout.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/checkout', element: <Checkout/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={routes}/>
    </CartProvider>
  </React.StrictMode>,
)
