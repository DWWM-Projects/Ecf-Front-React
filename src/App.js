import Fiche from "./Fiche.js"

function App() {
  return (
    <div>
      <div className="navbar">
        <h1>Découvrez notre <span className="blueTitle">Menu.</span></h1>
        <div className="filter">
          <button>Tout</button>
          <button>Viande</button>
          <button>Légumes</button>
        </div>
      </div>
      <div className="body">
        <Fiche />
      </div>
    </div>
  );
}

export default App;
