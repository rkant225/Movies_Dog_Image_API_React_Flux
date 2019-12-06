import AppDispatcher from "./AppDispatcher";
import Constants from "./Constants";
class Actions {
  searchMovies(movie: any) {
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_MOVIES,
      movie: movie
    });
  }

  showMovieResults(movies: any) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_MOVIE_RESULTS,
      movies: movies
    });
  }
}
export default new Actions();
