import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {HomeLayout,Landing,About,Products,Cart, Login,Register, Checkout,Orders,SingleProduct,Error} from './pages'
import {loader as ProductLoader} from './pages/Products'
import { ErrorElement } from './components'
import {loader as landingLoader} from './pages/Landing'
import {loader as SingleProductLoader} from './pages/SingleProduct'
import {loader as CheckoutLoader} from './pages/Checkout'
import {loader as ordersLoader} from './pages/Orders'
import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import {action as checkoutAction} from './components/CheckoutForm'
import { store } from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader:landingLoader(queryClient)
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'products',
        element:<Products/>,
        loader:ProductLoader(queryClient),
        errorElement:<ErrorElement/>
      },
      {
        path:'products/:id',
        element:<SingleProduct/>,
        loader:SingleProductLoader(queryClient),
        errorElement:<ErrorElement/>
      },
      {
        path:'cart',
        element:<Cart/>,
      },
      {
        path:'checkout',
        element:<Checkout/>,
        loader:CheckoutLoader(store),
        action:checkoutAction(store,queryClient),
      },
      {
        path:'orders',
        element:<Orders/>,
        loader:ordersLoader(store,queryClient)
      },
    ]
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>,
    action:loginAction(store),
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>,
    action:registerAction,
  }
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen="false"/>
    </QueryClientProvider>
    
  )
}

export default App