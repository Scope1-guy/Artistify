import "./FavoriteButton.css";

/*
  Presentational only. Wire this up later with something like:
    <FavoriteButton
      isFavorite={isFavorite}
      onClick={() => toggleFavorite(artist.id)}
    />
*/
function FavoriteButton({ isFavorite = false, onClick, label = "Favorite" }) {
  return (
    <button
      type="button"
      className={
        isFavorite
          ? "favorite-button favorite-button--active"
          : "favorite-button"
      }
      onClick={onClick}
      aria-pressed={isFavorite}
    >
      <svg
        viewBox="0 0 24 24"
        className="favorite-button__icon"
        aria-hidden="true"
      >
        <path
          d="M12 20.5s-7.5-4.6-10-9.3C0.4 7.9 2 4.5 5.4 4C7.6 3.7 9.7 4.8 12 7.1c2.3-2.3 4.4-3.4 6.6-3.1c3.4 0.5 5 3.9 3.4 7.2c-2.5 4.7-10 9.3-10 9.3Z"
          fill={isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <span>{isFavorite ? "Favorited" : label}</span>
    </button>
  );
}

export default FavoriteButton;
