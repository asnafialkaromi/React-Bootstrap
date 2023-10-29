import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestiMonialPage from "./pages/TestiMonialPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestiMonialPage} />
        <Route path="/syarat-ketentuan" Component={SyaratKetentuanPage} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
