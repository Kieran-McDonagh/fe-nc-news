import axios from 'axios'

const baseUrl = `https://news-api-rist.onrender.com/api`

const getAllArticles = () => {
  return axios
.get(`${baseUrl}/articles/`)
.then(({ data }) => {
    return data
  });
}

const getArticleById = (id) => {
    return axios.get(`${baseUrl}/articles/${id}`)
    .then(({data}) => {
        return data
    })
}

const getArticleCommentsById = (id) => {
  return axios.get(`${baseUrl}/articles/${id}/comments`)
  .then(({data}) => {
      return data
  })
}

const patchVotesById = (id, num) => {
  return axios.patch(`${baseUrl}/articles/${id}`, {
    inc_votes: num})
}

const getUsers = () => {
  return axios.get(`${baseUrl}/users`).then(({data}) => {
    return data
  })
}

const postComment = (id, username, body) => {
  return axios.post(`${baseUrl}/articles/${id}/comments`, {
    username: `${username}`,
    body: `${body}`
  }).then(({data: {addedComment}}) => {
    return addedComment
  })
}

export { getAllArticles, getArticleById, getArticleCommentsById, patchVotesById, getUsers, postComment };