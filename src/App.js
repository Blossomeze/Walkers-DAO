import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Footer from './Footer'
import Header from './Header';
import Whatwedo from './Whatwedo';
import FAQ from './FAQ';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/what_we_do' element={<Whatwedo />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>     
    </div>
  );
}

export default App;