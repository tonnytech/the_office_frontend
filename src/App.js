import "./App.css";
import { Routes, Route } from "react-router";
import Mainpage from "./pages/Mainpage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <main className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/the_office_frontend' element={<Mainpage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
