import axios from "axios";

const baseUrl = `https://news-api-rist.onrender.com/api`;

const getAllArticles = (topic, sortby, order) => {
  order ? order : (order = "desc");
  topic ? topic : (topic = "All");
  sortby ? sortby : (sortby = "created_at");
  if (topic === "All") {
    return axios
      .get(`${baseUrl}/articles?sort_by=${sortby}&order=${order}`)
      .then(({ data }) => {
        return data;
      });
  } else {
    return axios
      .get(
        `${baseUrl}/articles?topic=${topic}&sort_by=${sortby}&order=${order}`
      )
      .then(({ data }) => {
        return data;
      });
  }
};

const getArticleById = (id) => {
  return axios.get(`${baseUrl}/articles/${id}`).then(({ data }) => {
    return data;
  });
};

const getArticleCommentsById = (id) => {
  return axios.get(`${baseUrl}/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};

const patchVotesById = (id, num) => {
  return axios.patch(`${baseUrl}/articles/${id}`, {
    inc_votes: num,
  });
};

const getUsers = () => {
  return axios.get(`${baseUrl}/users`).then(({ data }) => {
    return data;
  });
};

const postComment = (id, username, body) => {
  return axios
    .post(`${baseUrl}/articles/${id}/comments`, {
      username: `${username}`,
      body: `${body}`,
    })
    .then(({ data: { addedComment } }) => {
      return addedComment;
    });
};

const getTopics = () => {
  return axios.get(`${baseUrl}/topics`).then(({ data }) => {
    return data;
  });
};

const deleteComment = (commentId) => {
  return axios.delete(`${baseUrl}/comments/${commentId}`).then(({ data }) => {
    return data;
  });
};

export {
  getAllArticles,
  getArticleById,
  getArticleCommentsById,
  patchVotesById,
  getUsers,
  postComment,
  getTopics,
  deleteComment,
};
