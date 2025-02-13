import React from 'react'
import Home from './Home';
import Dock from './assets/Dock';
import Help from './Help';
import Orders from './Orders';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
let router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Home/>
       <Dock/>
    </div>
  },
  {
    path: "/help",
    element:<div>
          <Help/>
          <Dock/>
        </div>
  },
  {
    path: "/orders",
    element:<div>
         <Orders/>
        </div>
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
