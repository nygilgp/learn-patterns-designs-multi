import api from './api';

const URLS = {
  getMeal: 'search.php',
};

export const searchMeals = (query, config) => {
  console.log(`searchMeals: ${query}`);

  return api
    .get(URLS.getMeal, {
      baseURL: 'https://www.themealdb.com/api/json/v1/1/',
      params: {
        s: query,
      },
      ...config,
    })
    .then((response) => response.data.meals);
};
