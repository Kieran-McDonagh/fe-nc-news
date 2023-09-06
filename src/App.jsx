import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homepage";
import IndividualArticle from "./components/IndividualArticle";
import Navigation from "./components/Navigation";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";

function App() {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </>
    )
  } else {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
      <Route path="*" element={<ErrorPage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
      </Routes>
    </>
  );
  }
}

export default App;
