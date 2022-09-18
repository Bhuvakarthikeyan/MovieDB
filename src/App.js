import React, { useState } from "react";
import "./App.css";
import MovieRow from "./MovieRow.js";
import Footer from "./Footer.js";

const App = () => {
  const [search, setSearch] = useState({});
  let performSearch;
  performSearch = function (searchTerm) {
    const url =
      "https://api.themoviedb.org/3/search/movie?&api_key=b6b3aaa39e9b8519d35c42addbdba973&query=" +
      searchTerm;
    fetch(url)
      .then((data) => {
        console.log("fetched data successfully");
        return data.json();
      })
      .then((searchResults) => {
        const results = searchResults.results;

        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w200" + movie.poster_path;
          const movieRow = <MovieRow movie={movie} key={movie.id} />;
          movieRows.push(movieRow);
          setSearch({ rows: movieRows });
        });
      })
      .catch((err) => {
        console.error("Failed to fetch data");
      });
  };

  const searchChangeHandler = function (event) {
    const boundObject = this;
    console.log(boundObject);
    const searchTerm = event.target.value;
    performSearch(searchTerm);
  };

  return (
    <div className="App">
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img
                className="brand-logo"
                alt="app icon"
                width="50"
                src="./movieDb.png"
              />
            </td>
            <td>
              <h2 id="brand-name">MovieDB Search</h2>
            </td>
          </tr>
        </tbody>
      </table>

      <input
        className="search-box"
        onChange={searchChangeHandler.bind(this)}
        placeholder="Enter Search"
        aria-label="searchbutton"
      />

      {search.rows}
      <Footer />
    </div>
  );
};

export default App;
