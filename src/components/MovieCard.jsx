import React from 'react';
import './MovieCard.css';
function MovieCard({ movie, onTrailerClick }) {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img src={movie.img} alt={movie.title} className="movie-img" />
        <div className="button-group">
          <button className="buy-ticket-button">🎟️ Mua vé</button>
          <button className="trailer-button" onClick={() => onTrailerClick(movie.trailerUrl)}>▶ Trailer</button>
        </div>
        <div className="rating">{movie.rating}</div>
        <div className="age">{movie.ageLabel}</div>
      </div>
      <p className="movie-title">{movie.title}</p>
    </div>
  );
}
export default MovieCard;