// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App bg-primary text-white min-h-screen">
        <Header /> {/* This remains static */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> This also remains static */}
      </div>
    </Router>
  );
}

export default App;
