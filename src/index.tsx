import React, { Component } from "react";
import ReactDom from "react-dom";
import SearchForm from "./SearchForm";
import MoviesResults from "./MoviesResults";
import MoviesStore from "./AppStore";
import SearchJokes from "./SearchJokes"
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);           
    this.state = { Obj : {dog_data : null, joke_data : null} }
    
    this.onAppStoreChange = this.onAppStoreChange.bind(this);
  }
  
  componentDidMount() {
    MoviesStore.addChangeListener(this.onAppStoreChange);
  }
  componentWillUnmount() {
    MoviesStore.removeChangeListener(this.onAppStoreChange);
  }

  onAppStoreChange() {
    var data = MoviesStore.getMovieResults();
    this.setState({Obj : data});
  }
  render() {    
    return (
      <div style={styles}>
        <h1>Search Random Dog</h1>
        <div className="container">
          <SearchForm />
          <SearchJokes />
        </div>          
        {this.state.Obj && this.state.Obj.dog_data && <img alt={"Loading..."} src={this.state.Obj.dog_data.message} height={400} width={400}/>}

        
        <h2>Random Joke</h2>
        {this.state.Obj && this.state.Obj.joke_data && 
        <div>
        <p><b>Category : </b>{this.state.Obj.joke_data.type}</p>
        <p><b>Joke : </b>{this.state.Obj.joke_data.setup}</p>
        <p><b>Punch Line : </b>{this.state.Obj.joke_data.punchline}</p>        
        </div>
        }

        
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
