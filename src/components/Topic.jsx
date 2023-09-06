import { useEffect, useState } from "react";
import { getTopics } from "../utils/api-utils";

const Topics = ({ setTopic, setSearchParams }) => {
  const [options, setOptions] = useState([]);


  useEffect(() => {
    getTopics().then(({ topics }) => {
      setOptions(topics);
      
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setTopic(event.target.value);
    setSearchParams(`?topic=${event.target.value}`)
  };

  return (
    <div className="topics-container">
      <label htmlFor="topics">
        <select name="topics" id="topics" onChange={handleChange}>
          <option>All</option>
          {options.map(({ slug }) => {
            return <option key={slug}>{slug}</option>
          })}
        </select>
      </label>
    </div>
  );
};

export default Topics;
