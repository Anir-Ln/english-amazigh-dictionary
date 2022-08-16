import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import WordCards from './components/WordCards';
import Footer from './components/Footer';
import EnWordPage from './pages/EnWordPage';
import AmWordPage from './pages/AmWordPage';
import Home from './pages/Home'
import EnPage from './pages/EnPage';
import AmPage from './pages/AmPage';

function App() {
  // const [homeWords, setHomeWords] = useState([])
 


  // when searchInput changes
  // useEffect(() => {
  //   console.log(searchInput)
  //   if(searchInput === '') {
  //     setWords([])
  //     return
  //   }
  //   getWords()
  // }, [searchInput])

  // // when words changes
  // useEffect(() => {
  //   console.log(words)
  // }, [words])

  

  // useEffect(() => {
  //   const getHomeWords = async () => {
  //     const res = await fetch(`/api/words/`)
  //     const data = await res.json()
  //     setHomeWords(data)
  //   }
  //   getHomeWords()
  // }, [])


  return (
    <Router>
      <div className="App">
        <Link to="/" className='text-link'>
          <Header />
        </Link>

        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/en_am/*' element={<EnPage />}/>
          <Route path='/am_en/*' element={<AmPage />}/>
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
