import axios from "axios";

const url = "http://movie-challenge-api-xpand.azurewebsites.net";

export const listMovies = (pagination, filter) => {
  const params = {
    page: pagination.page,
    size: pagination.size,
    start: filter.start,
    end: filter.end,
    rank: filter.rank,
    actor: filter.actor,
  };

  return axios.get(`${url}/api/movies`,
    {
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    })
};

export const getMovie = (id) => {

  return axios.get(`${url}/api/movies/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    })
};