import Fiche from "./Fiche.js"

function App() {
  // constructor(props) {
  //   super(props);

  // }

  // componentDidMount{

  // }

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
        <Fiche />
      </div>
    </div>
  );
}

export default App;
