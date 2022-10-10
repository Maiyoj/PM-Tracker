import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";
import User from "./components/User";
import Main from "./components/Main";
import Project from "./components/Project";

function App({}) {
  const [user, setUser] = useState("");
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
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/users" element={<User />} />
        <Route exact path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
