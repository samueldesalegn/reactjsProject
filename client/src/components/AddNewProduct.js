import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../network';
import UserContext from '../userContext';
import './AddProduct.css'; // Import your CSS file for styling

export default function AddProduct() {
  const [product, setProduct] = useState({ name: '', price: '', origin: '', instock: false });
  const { name, price, origin, instock } = product;
  const { state } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addProduct(product, state.user);

    if (res.success) {
      navigate('/');
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          value={price}
          name="price"
          placeholder="Enter price"
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          value={origin}
          name="origin"
          placeholder="Enter origin"
          onChange={handleChange}
          className="input-field"
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={instock}
            name="instock"
            onChange={handleChange}
            className="checkbox"
          />
          In Stock
        </label>
        <button type="submit" className="submit-button">Save</button>
      </form>
    </div>
  );
}




// import { useContext, useState } from "react";
// import UserContext from "../userContext";
// import { useNavigate } from "react-router";
// import { addProduct } from "../network";

// export default function AddProduct() {
//   const [product, setProduct] = useState({ name: "", price: "", origin: "", instock: false });
//   const {name, price, origin, instock} = product;
//   const change = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };
//   const { state } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const res = await addProduct(product, state.user);

//     if (res.success) {
//       navigate("/");
//     } else {
//       alert(res.error);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "20px",
//         alignItems: "center",
//       }}
//     >
//       <h1>Add Product</h1>
//       <form
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           width: "200px",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           value={name}
//           name="name"
//           placeholder="Enter name"
//           onChange={change}
//         />
//         <input
//           type="text"
//           value={price}
//           name="price"
//           placeholder="Enter price"
//           onChange={change}
//         />
//         <input
//           type="text"
//           value={origin}
//           name="origin"
//           placeholder="Enter origin"
//           onChange={change}
//         />
//         <input
//           type="checkbox"
//           value={instock}
//           name="instock"
//           placeholder="Enter instock"
//           onChange={change}
//         />
//         <input type="submit" value="Save" />
//       </form>
//     </div>
//   );
// }