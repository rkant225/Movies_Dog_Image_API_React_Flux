import React, { Component } from "react";
import ReactDom from "react-dom";
import SearchForm from "./SearchForm";
import MoviesResults from "./MoviesResults";
import MoviesStore from "./AppStore";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getAppState = this.getAppState.bind(this);
    this.state = this.getAppState();
  }
  getAppState() {
    return {
      movies: MoviesStore.getMovieResults()
    };
  }
  componentDidMount() {
    MoviesStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    MoviesStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(this.getAppState);
  }
  render() {
    var movieResults = "";
    if (this.state.movies === "") {
      movieResults = "";
    } else {
      movieResults = <MoviesResults movies={this.state.movies} />;
    }
    return (
      <div style={styles}>
        <h1>Movies</h1>
        <div className="container">
          <SearchForm />
        </div>
        <div className="container pull-down">{movieResults}</div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
