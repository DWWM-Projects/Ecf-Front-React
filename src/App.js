import React from "react";
import axios from "axios";
import Fiche from "./Fiche.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/repas").then(response => {
      this.setState ({dishes: response.data});
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="insideBar">
          <h1>Découvrez notre <span className="blueTitle">Menu.</span></h1>
          <div className="filter">
            <button>Tout</button>
            <button>Viande</button>
            <button>Légumes</button>
          </div>
          </div>
        </div>
        <div className="container">
          {this.state.dishes.map(dishe => <Fiche dishe={dishe} key={dishe.id}  />)}
        </div>
      </div>
    );
  }
}

export default App;
