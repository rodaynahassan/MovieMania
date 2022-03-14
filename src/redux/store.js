import {createStore} from 'redux';
import myMoviesReducer from './myMovies';

const store = createStore(myMoviesReducer);

export default store;
