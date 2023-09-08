import { useEffect, useState } from "react";
import { getTopics } from "../utils/api-utils";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Topics = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [err, setErr] = useState(null)

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    }).catch((err) => {
      setErr(err)
    })
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    navigate(`/topic/${event.target.value}`);
  };

 if (err) {
    <ErrorPage err={err} />
 }

  return (
    <div className="topics-container">
      <label htmlFor="topics">
        Topic:
        <select name="topics" id="topics" onChange={handleChange}>
          <option>All</option>
          {topics.map(({ slug }) => {
            return <option key={slug}>{slug}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default Topics;
