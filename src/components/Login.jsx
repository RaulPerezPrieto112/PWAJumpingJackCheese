// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import Image from "../assets/rata-Photoroom.png";
// import Logo from "../assets/MouseGif.gif";
// import GoogleSvg from "../assets/icons8-google.svg";
// import { FaEye } from "react-icons/fa6";
// import { FaEyeSlash } from "react-icons/fa6";
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
      
//       // Verificar si el usuario está en Firestore
//       const userDoc = await getDoc(doc(db, "users", user.uid));
//       if (userDoc.exists()) {
//         navigate("/landing"); // Redirige a LandingPage si el usuario está en la base de datos
//       } else {
//         setError("Usuario no registrado en la base de datos.");
//       }
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
//               <div className="login-center-options">
//                 <a href="#" className="forgot-pass-link">
//                   Forgot password?
//                 </a>
//               </div>
//              <br />
//               <div>
//                 <button type="submit" className="roundedButton">Log In</button>
//               </div>
//             </form>
//           </div>
//           <p className="login-bottom-p">
//             Don't have an account? <Link to="/register">Sign Up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Image from "../assets/rata-Photoroom.png";
import Logo from "../assets/MouseGif.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
      const user = userCredential.user;
  
      // Guarda el email en localStorage antes de redirigir
      localStorage.setItem("userEmail", user.email);
  
      // Redirige a LandingPage
      navigate("/landing");
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
            <p>Ingresa tus datos para iniciar</p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <br />
              <div>
                <button type="submit" className="roundedButton">Iniciar sesion</button>
              </div>
            </form>
          </div>
        
            <p className="login-bottom-p">
              ¿No tienes una cuenta? <a href="/register">Registrate</a> 
            </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
