import React from "react";
const MovieRow = (props) => {
  const viewMovie = () => {
    const url = "https://www.themoviedb.org/movie/" + props.movie.id;
    window.open(url, "_blank");
  };

  const overview = props.movie.overview;
  const slicedOverview = overview.slice(0, 100);
  return (
    <div className="movie">
      <img className="movie-poster" alt="poster" src={props.movie.poster_src} />
      <div className="movie-content">
        <h3 className="movie-title">{props.movie.title}</h3>
        <p className="movie-overview">{slicedOverview}...</p>
        <input
          type="button"
          className="view-btn"
          onClick={viewMovie.bind(this)}
          value="View"
          aria-label="viewbutton"
        />
      </div>
    </div>
  );
};

export default MovieRow;
