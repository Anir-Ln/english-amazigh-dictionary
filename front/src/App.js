import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import WordCards from './components/WordCards';
import Footer from './components/Footer';
import WordPage from './pages/WordPage';

function App() {
  const [homeWords, setHomeWords] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [words, setWords] = useState([])
  
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

  useEffect(() => {
    setWords([])
  }, [searchInput])


  const handleSearchSubmit = () => {
    console.log('submit: ', searchInput)
    getWords()
  }

  useEffect(() => {
    const getHomeWords = async () => {
      const res = await fetch(`/api/words/`)
      const data = await res.json()
      setHomeWords(data)
    }
    getHomeWords()
  }, [])


  const getWords = async () => {
    let res = await fetch(`/api/words/${searchInput}`)
    let data = await res.json()
    if (data.length === 0)
      data.push({en: "", am:"we couldn't find this word in our dictionary"})
    setWords(data)
    console.log('getWords')
  }

  const handleWordClick = () => {
    setWords([])
    setSearchInput('')
  }

  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <SearchBox handleSearchSubmit={handleSearchSubmit} handleSearchChange={setSearchInput} searchInput={searchInput}/>
          <WordCards words={words} searchInput={searchInput} handleWordClick={handleWordClick}/>
        </main>

        <Routes>
          <Route path='/:en' element={<WordPage />}/>
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
