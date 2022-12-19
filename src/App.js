import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Navigate from "./components/Navigate";
import Home from "./components/reducer/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:param" element={<Navigate />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
