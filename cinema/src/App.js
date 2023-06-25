import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddMovies from './components/AddMovies';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addmovie' element={<AddMovies/>} />
        <Route path='/aboutus'  element={<About/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
