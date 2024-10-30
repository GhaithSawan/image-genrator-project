import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import CreateImagepage from "./pages/CreateImagepage";
import Navbar from "./component/Navbar";
import "./index.css"
import Footer from "./component/footer";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/CreateImagepage" element={<CreateImagepage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
