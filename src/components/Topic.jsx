import { useEffect, useState } from "react";
import { getTopics } from "../utils/api-utils";
import { useNavigate } from "react-router-dom";

const Topics = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    navigate(`/topic/${event.target.value}`);
  };

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
