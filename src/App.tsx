import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DecimalToBinary from "@/pages/DecimalToBinary";
import DecimalToHex from "@/pages/DecimalToHex";
import DecimalToOctal from "@/pages/DecimalToOctal";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DecimalToBinary/>} path="/DecimalToBinary" />
      <Route element={<DecimalToOctal/>} path="/DecimalToOctal" />
      <Route element={<DecimalToHex/>} path="/DecimalToHex" />
    </Routes>
  );
}

export default App;
