import { Component } from "react";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    // console.log("render");
    const { items } = this.props;

    return (
      <div className="card-list">
        {items.map((item) => {
          const { id, name, email } = item;

          return (
            <div key={id} className="card-container">
              <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={name}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
