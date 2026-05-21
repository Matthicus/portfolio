import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkDetail from "./pages/WorkDetail";
import Navbar from "./components/Navbar";
import TextFlip from "./components/TextFlip";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const titles = ["Storms Matthice", "Webdesign", "Graphic design"];

    const index = { current: 0 };

    const interval = setInterval(() => {
      index.current = (index.current + 1) % titles.length;
      document.title = titles[index.current];
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <BrowserRouter>
      <div className="App w-full overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <div className="pt-52">
                <Navbar />
                <TextFlip />
                <About />
                <Work />
                <Footer />
              </div>
            }
          />
          <Route path="/work/:id" element={<WorkDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
