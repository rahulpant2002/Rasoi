import {React, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

import './index.css';
import App from './App';
import About from './components/About';
import { Contact } from './components/Contact';
import Body from './components/Body';
import RestMenu from './components/RestMenu';
import Shimmer from './components/Shimmer';
import Cart from './components/Cart';

const Error = lazy(()=>import('./components/Error'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element : <About/> 
      },
      {
        path: '/contact',
        element : <Contact/>
      },
      {
        path: '/restaurants/:restId',
        element: <RestMenu/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ],
    errorElement : (<Suspense fallback=<Shimmer/> >
              <Error/>;
                </Suspense>)
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {appRouter}/>
);

export default Outlet;

