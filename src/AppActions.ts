import AppDispatcher from "./AppDispatcher";
import Constants from "./Constants";
class Actions {
  searchMovies(movie: any) {       
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_MOVIES,
      data: movie
    });
  }

  showMovieResults(movies: any) {    
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_MOVIE_RESULTS,
      data: movies
    });
  }
}
export default new Actions();
