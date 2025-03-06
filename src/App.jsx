
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import LandingPage from "./components/LandingPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/landing" element={<LandingPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
