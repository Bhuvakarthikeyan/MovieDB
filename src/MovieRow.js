import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.open(url, "_blank");
  }

  render() {
    const overview = this.props.movie.overview;
    const slicedOverview = overview.slice(0, 100);
    return (
      <div className="movie">
        <img
          className="movie-poster"
          alt="poster"
          src={this.props.movie.poster_src}
        />
        <div className="movie-content">
          <h3 className="movie-title">{this.props.movie.title}</h3>
          <p className="movie-overview">{slicedOverview}...</p>
          <input
            type="button"
            className="view-btn"
            onClick={this.viewMovie.bind(this)}
            value="View"
            aria-label="viewbutton"
          />
        </div>
      </div>
    );
  }
}

export default MovieRow;
