import './App.css';
import HomePage from "./pages/HomePage";
import {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {

    let [movies, setMovies] = useState(["Loading..."]);

    useEffect(() => {
        fetch("./jsonData/movies.json")
            .then(response => response.json() )
            .then( setMovies)
            .catch( error => console.log(error) );
    }, [])

  return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage movies={movies} imgDir={["./imgs/"]}/>}  />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
