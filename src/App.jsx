import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkDetail from "./pages/WorkDetail";
import Navbar from "./components/Navbar";
import TextFlip from "./components/TextFlip";
import Footer from "./components/Footer";
import About from "./components/About";

import Work from "./pages/Work";

function App() {
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
                <Footer />
              </div>
            }
          />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
