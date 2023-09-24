import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../network'; // Assuming you have the 'signup' function defined in 'network.js'
import './SignUp.css'; // Import your CSS file for styling

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{10,24}$/;

const InputField = ({ type, placeholder, name, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className="input-field"
  />
);

export default function SignUp() {
  const [user, setUser] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    return PWD_REGEX.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(user.password)) {
      alert('Weak password');
      return;
    }

    if (user.password === user.confirmPassword) {
      try {
        const res = await signup(user.email, user.password);

        if (res.success) {
          alert('Registration successful!');
          navigate('/');
        } else {
          alert(res.error);
        }
      } catch (error) {
        alert('Error: Registration failed');
      }
    } else {
      alert('Password mismatch');
    }
  };

  const toLogin = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <InputField
          type="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <InputField
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Register User
        </button>
      </form>
      <button onClick={toLogin} className="login-button">
        Already have an account? Login here
      </button>
    </div>
  );
}




// export default function SignUp() {
//   const [user, setUser] = useState({ email: "", password: "", confirmPassword: "" });
//   const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{10,24}$/;
//   const navigate = useNavigate();
//   const change = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//   const { email, password, confirmPassword } = user;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//       // console.log(user.email, user.password);
//       if (!PWD_REGEX.test(password)) {
//         alert("Weak password");
//         return;
//     }

//     try {
//       if (password === confirmPassword) {
//         const res = await signup( email, password );
        
//         if (res.success) {
//           alert("Registration successful!");
//           navigate('/')
//         } else {
//           alert(res.error);
//         }
//       }else {
//         alert("Password mismatch")
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };
//   const toLogin = ()=>{
//    navigate('/')
//   }

//   return (
// 		<>
//     <h3>SIGN UP</h3>
//     <form
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
// 			<input
//         type="password"
//         placeholder="Confirm your password"
//         value={user.confirmPassword}
//         name="confirmPassword"
//         onChange={change}
//       />
//       <input type="submit" value="RegisterUser" />
//     </form>
// 		<button onClick={toLogin} style={{ cursor: "pointer" }}>Already have Account? Login here</button>
// 		</>
//   );
// }

