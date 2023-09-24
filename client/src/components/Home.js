import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import { getProducts } from '../network';
import UserContext from '../userContext';
import './Home.css'; // Import your CSS file for styling

export default function Home() {
  const [products, setProducts] = useState([]);
  const { state, setState } = useContext(UserContext);
  const navigate = useNavigate();

  const navigateToAddProduct = () => {
    navigate('/AddNewProduct');
  };

  const logoutHandle = () => {
    localStorage.removeItem('user');
    setState({ ...state, user: null });
  };

  const fetchProducts = async () => {
    try {
      const res = await getProducts(state.user);
      if (res.success) {
        setProducts([...res.data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <button className="action-button" onClick={navigateToAddProduct}>
        Go to Add New Product
      </button>
      <button className="action-button" onClick={logoutHandle}>
        Logout
      </button>
      <ProductList products={products} reload={fetchProducts} />
    </div>
  );
}






// import { useNavigate } from "react-router-dom";
// import ProductList from './ProductList';
// import { useEffect, useState, useContext } from "react";
// import { getProducts } from "../network";
// import UserContext from "../userContext";

// export default function Home(){
//   const [products, setProducts] = useState([])
// 	const {state, setState} = useContext(UserContext)

// 	const navigate = useNavigate();
// 	const navigateToAddProd = () => {
// 		navigate("/AddNewProduct");
// 	};
	
// 	const logoutHandle = () => {
// 		localStorage.removeItem('user');
// 		setState({...state, user: null});
// 	};

// 	const fetchProducts = async () => {
// 		try {
// 			const res = await getProducts(state.user);
// 			if (res.success) {
// 				setProducts([...res.data]);
				
// 			}
// 		} catch (error) {
			
// 		}
// 	};

//   useEffect(() => {
    
//     fetchProducts();
    
//   }, []);
	
// 	return (
// 		<div>
// 			<button onClick={navigateToAddProd} >Goto Add NewTask</button>
// 			<button onClick={logoutHandle} >Logout</button>
// 				<ProductList products={products} reload={fetchProducts}/>
// 		</div>
// 	);
// }