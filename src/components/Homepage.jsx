import { useState } from "react";
import AllArticles from "./AllArticles";
import Topics from "./Topic";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("desc");

  return (
    <>
      <div className="filters">
        <Topics />
        <SortBy setSearchParams={setSearchParams} setOrder={setOrder} />
      </div>
      <AllArticles searchParams={searchParams} order={order} />
    </>
  );
};

export default Home;
