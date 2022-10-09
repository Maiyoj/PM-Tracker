import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((r) => {
      {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginForm onLogin={setUser} />;
  return (
    <div>
      <Navbar user={user} setUser={setUser} />

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
