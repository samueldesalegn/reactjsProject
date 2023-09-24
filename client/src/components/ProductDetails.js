import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../network';
import UserContext from '../userContext';
import './ProductDetails.css'; // Import your CSS file for styling

export default function ProductDetails({ prod, reload }) {
  const navigate = useNavigate();
  const { state } = useContext(UserContext);

  const edit = () => {
    navigate('/EditProduct', { state: prod });
  };

  const handleDelete = async () => {
    const res = await deleteProduct(prod.id, state.user);

    if (res.success) {
      reload();
    }
  };

  const { name, price, origin, instock } = prod;

  return (
    <div className="product-details-container">
      <div className={`product-info ${instock ? 'instock' : 'out-of-stock'}`}>
        <p>
          Name: {name} - Price: {price} - Origin: {origin} - Instock: {instock}
        </p>
      </div>
      <div className="button-container">
        <button className="edit-button" onClick={edit}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}







// import { deleteProduct } from "../network";
// import { useNavigate } from "react-router-dom";
// import UserContext from "../userContext";
// import { useContext } from "react";


// export default function ProdctDetails({prod, reload}) {
// 	const navigate = useNavigate();
// 	const {state} = useContext(UserContext)

// 	const edit = () => {
// 		navigate("/EditProduct", {state: prod})
// 	}

// 	const HandleDelete = async () => {
// 		const res = await deleteProduct(prod.id, state.user);
		
// 		if (res.success) {
// 			reload()
// 		}
// 	}

	
// 	const {id, name, price, origin, instock} = prod;
// 	return (
// 		<div style={{display:"flex", flexDirection:"row", textAlign:"center", margin:"5px", justifyContent: "center", horizontalAlign: "center", margin: "5px", }}>
// 		<div style={{textAlign:"center", justifyContent: "center", border: "5px solid blue", margin:"5px"}}>
// 			{instock? <p>Id: {id} - Name: {name} - Price: {price} - Origin: {origin} - Instock: {instock} </p>: null}
// 		</div>
// 		<div >
// 		<button onClick={edit} style={{textAlign:"center", justifyContent: "center", border: "5px solid blue", margin:"5px"}}>Edit</button>
// 		<button onClick={HandleDelete} style={{textAlign:"center", justifyContent: "center", border: "5px solid red", marginTop:"30px"}} >Delete</button>
// 		</div>
// 		</div>
// 	);
// }