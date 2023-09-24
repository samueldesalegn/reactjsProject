import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { editProduct } from '../network';
import UserContext from '../userContext';
import './EditProduct.css'; // Import your CSS file for styling

export default function EditProduct() {
  const { state } = useContext(UserContext);
  const location = useLocation();
  const [eprod, setEditProd] = useState(location.state);
  const { name, price, origin, instock } = eprod;

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setEditProd({ ...eprod, [e.target.name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await editProduct(eprod, state.user);

    if (res.success) {
      navigate('/');
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="input-field"
        />

        <input
          type="number"
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

        <button type="submit" className="update-button">
          Update
        </button>
      </form>
    </div>
  );
}



// import { useContext, useState } from "react";
// import UserContext from "../userContext";
// import { useNavigate} from "react-router";
// import { useLocation } from "react-router-dom";
// import { editProduct } from "../network";

// export default function EditProduct() {
//   const { state } = useContext(UserContext);
//   const location = useLocation();
//   const [eprod, setEditProd] = useState(location.state);
//   const {name, price, origin, instock} = eprod;

//   const change = (e) => {
//     setEditProd({ ...eprod, [e.target.name]: e.target.value });
//   };

//   const navigate = useNavigate();
//   // console.log(eprod);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await editProduct(eprod, state.user);
//     console.log(res);

//     if (res.success) {
//       navigate("/");
//     } else {
//       alert(res.error);
//     }
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//       <h1>Edit Product</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           name="name"
//           placeholder="Enter Name"
//           onChange={change}
//         />

//         <input
//           type="number"
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
        
//         <input type="submit" value="update" />
//       </form>
//     </div>
//   );
// }
