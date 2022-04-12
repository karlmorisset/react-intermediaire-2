import { Routes, Route } from "react-router-dom";
import Simpson from "@pages/Simpson";
import Header from "@pages/Header";
import Home from "@pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simpsons" element={<Simpson />} />
      </Routes>
    </>
  );
}

export default App;
