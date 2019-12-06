import Actions from "./AppActions";
const $ = window.jQuery;
class API {
  searchMovies(movie) {
    $.ajax({
      //url: "https://omdbapi.com/?apikey=YOURAPIKEY&s=" + movie.title,
      url: "https://dog.ceo/api/breeds/image/random",
      dataType: "json",
      cache: false,
      success(data) {
        let movies = data.Search ? data.Search : [];
        console.log(data.message);
        Actions.showMovieResults(movies);
      },
      error(xhr, status, err) {
        alert(err);
      }
    });
  }
}
export default new API();
