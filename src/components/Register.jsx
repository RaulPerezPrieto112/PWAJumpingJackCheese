import React, { useState } from "react";
import { auth, db } from "../firebase"; // Asegúrate de importar `db`
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Image from "../assets/rata-Photoroom.png";
import Logo from "../assets/MouseGif.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validaciones antes del registro
    if (!email || !password || !confirmEmail || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (email !== confirmEmail) {
      setError("Los correos electrónicos no coinciden.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      // 🔥 Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Usuario registrado en Auth:", user.uid);

      // 🔥 Guardar en Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: serverTimestamp()
      });

      console.log("Usuario guardado en Firestore correctamente.");
      window.location.href = "/login"; // Redirige al login
    } catch (error) {
      console.error("Error al registrar:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado. Intenta iniciar sesión.");
      } else if (error.code === "auth/invalid-email") {
        setError("El correo ingresado no es válido.");
      } else {
        setError("Error al registrar. Inténtalo de nuevo.");
      }
    }
  };

  return (
    <div className="login-main">
      
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Regístrate</h2>
            <p>Completa los datos para crear tu cuenta</p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleRegister}>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <input 
                type="email" 
                placeholder="Confirmar Email" 
                value={confirmEmail} 
                onChange={(e) => setConfirmEmail(e.target.value)}
                required 
              />
              
              <div className="pass-input-div">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Contraseña" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              <div className="pass-input-div">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirmar Contraseña" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
                {showConfirmPassword ? (
                  <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                ) : (
                  <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                )}
              </div>
              <div>
                <button type="submit" className="roundedButton">Registrar</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
          </p>
        </div>
      </div>
      <div className="login-left">
        <img src={Image} alt="Background" />
      </div>
    </div>
  );
};

export default Register;
