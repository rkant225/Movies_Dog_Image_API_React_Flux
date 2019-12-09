import Actions from "./AppActions";
const $ = window.jQuery;
class API {
  searchMovies(movie) {
    let final_data={dog_data : null, joke_data : null};
    $.ajax({
      //url: "https://omdbapi.com/?apikey=YOURAPIKEY&s=" + movie.title,
      url: "https://dog.ceo/api/breeds/image/random",
      dataType: "json",
      cache: false,
      success(data) {        
        final_data.dog_data = data ? data : null;
      },
      error(xhr, status, err) {
        alert(err);
      }
    });

    $.ajax({
      //url: "https://omdbapi.com/?apikey=YOURAPIKEY&s=" + movie.title,
      url: "https://official-joke-api.appspot.com/jokes/random",
      dataType: "json",
      cache: false,
      success(data) {
        final_data.joke_data = data ? data : null;        
        Actions.showMovieResults(final_data);
      },
      error(xhr, status, err) {
        alert(err);
      }
    });
  }
}
export default new API();
