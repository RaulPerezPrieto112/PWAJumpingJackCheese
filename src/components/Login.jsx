
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import Image from "../assets/rata-Photoroom.png";
// import Logo from "../assets/MouseGif.gif";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import "../components/index.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
  
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
  
//       // Guarda el email en localStorage antes de redirigir
//       localStorage.setItem("userEmail", user.email);
  
//       // Redirige a LandingPage
//       navigate("/landing");
//     } catch (error) {
//       setError("Error al iniciar sesión. Verifica tus credenciales.");
//     }
//   };
  

//   return (
//     <div className="login-main">
//       <div className="login-left">
//         <img src={Image} alt="" />
//       </div>
//       <div className="login-right">
//         <div className="login-right-container">
//           <div className="login-logo">
//             <img src={Logo} alt="" />
//           </div>
//           <div className="login-center">
//             <h2>Bienvenido!</h2>
//             <p>Ingresa tus datos para iniciar</p>
//             {error && <p className="error-message">{error}</p>}
//             <form onSubmit={handleLogin}>
//               <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               <div className="pass-input-div">
//                 <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 {showPassword ? (
//                   <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
//                 ) : (
//                   <FaEye onClick={() => setShowPassword(!showPassword)} />
//                 )}
//               </div>
//               <br />
//               <div>
//                 <button type="submit" className="roundedButton">Iniciar sesion</button>
//               </div>
//             </form>
//           </div>
        
//             <p className="login-bottom-p">
//               ¿No tienes una cuenta? <a href="/register">Registrate</a> 
//             </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "../assets/rata-Photoroom.png";
import Logo from "../assets/MouseGif.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "../components/index.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userEmail", userCredential.user.email);
      navigate("/"); // 🔥 Redirige a LandingPage
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Bienvenido!</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} /> : <FaEye onClick={() => setShowPassword(!showPassword)} />}
              </div>
              <button type="submit" className="roundedButton">Iniciar sesión</button>
            </form>
          </div>
          <p className="login-bottom-p">
            ¿No tienes una cuenta? <a href="/register">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
