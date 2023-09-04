import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home from './components/Homepage'
import IndividualArticle from './components/IndividualArticle';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Header />
     <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
      </Routes>
    </>
  )
}

export default App

