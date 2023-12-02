import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import DetailPage from "./views/DetailPage";
import FormPage from "./views/FormPage";
import Home from "./views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="home" element={<Home />} />
      <Route path="details" element={<DetailPage />} />
      <Route path="create" element={<FormPage />} />
    </Routes>
  );
}

export default App;
