import { Component } from "react";

import CardList from "./components/card-list/card-list.component";

import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    // console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
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
    // console.log(event.target.value);
    const { value } = event.target;
    const searchString = value.toLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    // console.log("render");
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          className=""
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
        />
        {/* {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })} */}
        <CardList items={filteredMonsters} />
      </div>
    );
  }
}
export default App;
