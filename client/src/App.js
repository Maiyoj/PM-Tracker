import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <LoginForm />

      {/* 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/games/:gameID" element={<Game />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes> */}
    </div>
  );
}

export default App;
