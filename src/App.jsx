// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import PreNavBar from "./components/PreNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
import banner from "./data/data.json";
// import offer from "./data/data.json";
// import Offers from "./components/Offers";

function App() {
  return (
    <Router>
      <PreNavBar></PreNavBar>
      <Navbar></Navbar>
      <Slider start={banner.banner.start}></Slider>
      {/* <Offers offer={offer.offer}></Offers> */}
    </Router>
  );
}

export default App;
