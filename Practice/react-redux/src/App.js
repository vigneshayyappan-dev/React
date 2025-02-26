import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import RouterHelper from "./components/RouterHelper";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RouterHelper />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/user/:username" element={<User />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
