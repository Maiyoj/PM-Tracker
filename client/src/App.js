import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";
import User from "./components/User";
import Main from "./components/Main";
import Project from "./components/Project";
import EditTicket from "./components/EditTicket";
import ClientsProjects from "./components/ClientsProjects";
import Client from "./components/Client";
import Profile from "./components/Profile";
import AppCs from "./components/AppCs";


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginForm onLogin={setUser} />;
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<Main user={user} />} />
        <Route exact path="/users" element={<User />} />
        <Route exact path="/profile" element={<Profile  user={user}/>} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/clients" element={<Client />} />
        <Route exact path="/projects/:id" element={<EditTicket />} />
        <Route exact path="/clientsprojects" element={<ClientsProjects />} />
        <Route exact path="/calendar" element={<AppCs />} />
      </Routes>
    </div>
  );
}

export default App;
