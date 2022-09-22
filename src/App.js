import React, { useState, useEffect } from "react";
import "./App.css";
import MovieRow from "./MovieRow.js";
import Footer from "./Footer.js";

const App = () => {
  const [movieList, setMovieList] = useState();

  const performSearch = (searchTerm) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?&api_key=b6b3aaa39e9b8519d35c42addbdba973&query=" +
      searchTerm;
    fetch(url)
      .then((data) => {
        console.log("fetched data successfully");
        return data.json();
      })
      .then((searchResults) => {
        var movieRows = [];
        searchResults.results.forEach((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w200" + movie.poster_path;
          movieRows.push(<MovieRow movie={movie} key={movie.id} />);
        });
        setMovieList(movieRows);
      })
      .catch((err) => {
        console.error("Failed to fetch data");
      });
  };

  useEffect(() => {
    /* replace the argument with default search term */
    performSearch("term");
  }, []);

  const searchChangeHandler = function (event) {
    performSearch(event.target.value);
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
              <h2>option</h2>
            </td>
          </tr>
        </tbody>
      </table>

      <input
        className="search-box"
        onChange={searchChangeHandler}
        placeholder="Enter Search"
        aria-label="searchbutton"
      />
      {movieList}
      <Footer />
    </div>
  );
};

export default App;
