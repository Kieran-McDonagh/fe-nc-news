import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homepage";
import IndividualArticle from "./components/IndividualArticle";
import Navigation from "./components/Navigation";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/topic/:topic" element={<Home />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
      </Routes>
    </>
  );
}

export default App;
