
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


import HomePage from '../Home-page/Home-page'
import Catalog from '../Catalog-page/Catalog/Catalog'
import ProductPage from "../Product-page/Product-page";
import NotFound from "../404/404";

import './App.scss';

const router = createBrowserRouter([
  {
    path: "/Anima",
    element: <HomePage />,
  },
  {
    path: "/Anima/catalog",
    element: <Catalog />,
  },
  {
    path: "/Anima/product/:itemId",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
