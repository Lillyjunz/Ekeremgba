import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScripts from "./Components/MainScripts";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import PhotoGallery from "./Pages/PhotoGallery";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainScripts></MainScripts>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
