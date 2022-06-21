import LandingPage from "./Components/LandingPage/LandingPage"
import AboutPage from "./Components/AboutPage/AboutPage"
import UploadPage from "./Components/UploadPage/UploadPage"
// import MobileNavBarActive from "./Components/Utility/MobileNavBarActive"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/project-team" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//When I tried to do the routing, it routes correctly to the page. 
//However, the correct page elements are not loading. Except I just use a random text like hellp world.