import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render");
    const { item } = this.props;
    return (
      <div>
        {item.map((item) => {
          return <h1 key={item.id}>{item.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
