import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import ProductList from './components/ProductList';
import Home from "./components/Home";
import EditProduct from './components/EditProduct';
import AddNewProduct from './components/AddNewProduct';
import Login from "./components/login";
import SignUp from "./components/signup";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/ProductList",
    element: <ProductList />
  },  
  {
    path: "/AddNewProduct",
    element: <AddNewProduct />
  },  
  {
    path: "/EditProduct",
    element: <EditProduct />
  }
]);


export const Auth = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path:"/signup",
      element:<SignUp/>
    }
    
  ]);
  return <RouterProvider router={router} />;
};


export default router;

