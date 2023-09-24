import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../network';
import UserContext from '../userContext';
import './Login.css'; // Import your CSS file for styling

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const { state, setState } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(user.email, user.password);
      if (res.success) {
        setState({ ...state, user: res.data });
        localStorage.setItem('user', JSON.stringify(res.data)); // Store user data as a string
        navigate('/');
      } else {
        alert(res.error);
      }
    } catch (error) {
      alert('Error: Login failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={user.email}
          name="email"
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={user.password}
          name="password"
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <Link to="/signup" className="signup-link">
        <button className="signup-button">Don't have an account? Register</button>
      </Link>
    </div>
  );
}























// import { useContext, useState } from "react";
// import login from "../network";
// import UserContext from "../userContext";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const change = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

  
//   const { state, setState } = useContext(UserContext);
//   const navigate = useNavigate();
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login(user.email, user.password);
//       if (res.success) {
//         // console.log(res.data)
//         setState({ ...state, user: res.data });
//         localStorage.setItem("user", res.data);
        
//       }else {
//         alert(res.error)
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };
  
//   const toSignup = () => {
//     navigate("/signup");
//   };

//   return (
//     <>
//      <form
//       onSubmit={handleSubmit}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "20px",
//         maxWidth: "768px",
//         margin: "0 auto",
//       }}
//     >
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={user.email}
//         name="email"
//         onChange={change}
//       />
//       <input
//         type="password"
//         placeholder="Enter your password"
//         value={user.password}
//         name="password"
//         onChange={change}
//       />
//       <input type="submit" value="Login"/>
//     </form>
//     <Link  to="/signup">
//       <button style={{ cursor: "pointer" }} onClick={toSignup}>Don't have Account? Register</button>
//     </Link>
//     </>

//   );
// }
