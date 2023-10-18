import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Messages from "./components/Messages";
import MessageDetails from "./components/MessageDetails";
import Login from "./components/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (password) => {
    if (password === "1") {
      setIsLoggedIn(true);
      navigate("/", { replace: true });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="container">
      <Navbar isLoggedIn={isLoggedIn} onLogOut={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {isLoggedIn ? (
          <>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/messages" element={<Messages />}>
              <Route path="/messages/:id" element={<MessageDetails />} />
            </Route>
          </>
        ) : (
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
