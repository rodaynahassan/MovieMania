export const ADD_TO_FAVORITE_MOVIES = 'ADD_TO_FAVORITE_MOVIES';
export const REMOVE_FROM_FAVORITE_MOVIES = 'REMOVE_FROM_FAVORITE_MOVIES';
export const ADD_NEW_MOVIE = 'ADD_NEW_MOVIE';

export const createMovie = (
  title,
  overview,
  releaseDate,
  poster,
  voteAverage,
) => {
  return {
    type: 'ADD_NEW_MOVIE',
    payload: {
      original_title: title,
      overview: overview,
      release_date: releaseDate,
      vote_average: voteAverage,
      poster: poster,
    },
  };
};

export const addMovieToFavorites = movie => {
  return {
    type: 'ADD_TO_FAVORITE_MOVIES',
    payload: {
      original_title: movie.original_title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
      id: movie.id,
    },
  };
};

export const removeMovieFromFavorites = movie => {
  return {
    type: 'REMOVE_FROM_FAVORITE_MOVIES',
    payload: {
      id: movie.id,
    },
  };
};

const initialState = [];

const myMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MOVIE:
      return [...state, action.payload];
    case ADD_TO_FAVORITE_MOVIES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITE_MOVIES:
      return state.filter(movie => movie.id !== action.payload.id);
  }
  return state;
};

export default myMoviesReducer;
