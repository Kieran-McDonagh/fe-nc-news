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


export { getAllArticles, getArticleById, getArticleCommentsById };