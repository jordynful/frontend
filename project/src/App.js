import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Book from './pages/Book';
import Login from './pages/Login';
import { useState } from 'react';
import ShowTimes from './pages/ShowTimes';
import Payment from './pages/Payment';
import CheckOut from './pages/CheckOut';
import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
const fast = [
  {
    id: 'p1',
    title: 'Avocado Toast',
    description: 'A slice of sourdough bread topped with mashed avocado and an egg.',
    imageUrl:
      'https://www.thenomadicfitzpatricks.com/wp-content/uploads/2020/06/IMG_8023.jpg',
    facts: 'Total Fat: 8g, Saturated Fat: 1g, Trans Fat: 0g, Cholesterol: 0mg,Sodium: 160g, Total Carbohydrate: 37g, Dietary Fiber: 4g, Total Sugars: 12g, Protein: 3g, Vitamin D: 2mcg, Calcium: 260mg, Iron: 8mg, Potassium: 240mg',
  },
  {
    id: 'p2',
    title: 'Breakfast Burrito',
    description: 'Scrambled eggs, cheddar cheese, avocado, pico de gallo, and your choice of protein.',
    imageUrl:
      'https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg',
      facts: 'Total Fat: 8g, Saturated Fat: 1g, Trans Fat: 0g, Cholesterol: 0mg,Sodium: 160g, Total Carbohydrate: 37g, Dietary Fiber: 4g, Total Sugars: 12g, Protein: 3g, Vitamin D: 2mcg, Calcium: 260mg, Iron: 8mg, Potassium: 240mg',
  },

];

function App() {
  const [bfast, setBfast] = useState(fast);
  return (
    <div className="App">
     <BrowserRouter>
        <Header/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/book-tickets" element={<Book />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ShowTimes" element={<ShowTimes />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
