import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
