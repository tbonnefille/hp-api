
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Home from './Containers/Home/Home';
import Gryffindor from './Containers/Gryffindor/Gryffindor';
import Ravenclaw from './Containers/Ravenclaw/Ravenclaw';
import Slytherin from './Containers/Slytherin/Slytherin';
import Hufflepuff from './Containers/Hufflepuff/Hufflepuff';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Hero />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/gryffindor" element={<Gryffindor/>}/>
            <Route path="/ravenclaw" element={<Ravenclaw/>}/>
            <Route path="/slytherin" element={<Slytherin/>}/>
            <Route path="/hufflepuff" element={<Hufflepuff/>}/>
          </Routes>  
          <Footer />      
				</div>
      </BrowserRouter>
  );
  }
export default App;
