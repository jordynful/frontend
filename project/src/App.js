import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Book from './pages/Book';
import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/book-tickets" element={<Book />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
