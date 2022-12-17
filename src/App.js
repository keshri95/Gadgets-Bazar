import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Navabar from "./components/Navabar";
import Home from "./components/reducer/Home";

function App() {
  return (
    <>
      <div>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
