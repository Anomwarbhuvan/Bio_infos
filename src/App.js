import { Component } from "react";
import CardList from "./components/card-list/card-list.component";


import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      profs: [],
      searchField : '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { profs: users };
          })
      );
  }

  onsearchChange= (event) => {

  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return { searchField };  
  });
}

  render() {
    
    const { profs, searchField } = this.state;
    const { onsearchChange } = this;
    const filteredProfs = this.state.profs.filter((prof) => {
      return prof.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title"> Zombie Profiles </h1>
        
        <SearchBox className = 'search-box' onChangeHandler = { onsearchChange}  placeholder = 'search profiles' />
        <CardList profs = {filteredProfs} />
      </div>
      
    );
  }
}

export default App;
