import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    console.log("render");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });

    return (
      <div className="App">
        <h1>Title</h1>
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={this.onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}
export default App;
