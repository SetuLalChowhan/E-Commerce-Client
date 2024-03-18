import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/home/SingleProduct";

function App() {
 

  return <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop/:id" element={<SingleProduct/>} />
    </Routes>
  </Router>
}

export default App;
