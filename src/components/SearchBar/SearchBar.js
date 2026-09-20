import "./SearchBar.css";

/*
  This component only renders the search form.
  Hook it up to state later by passing:
    value={yourSearchTerm}
    onChange={(e) => setYourSearchTerm(e.target.value)}
    onSubmit={(e) => { e.preventDefault(); runYourSearch(); }}
*/
function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Search for an artist...",
  size = "default",
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) onSubmit(event);
  };

  return (
    <form
      className={`search-bar search-bar--${size}`}
      role="search"
      onSubmit={handleSubmit}
    >
      <svg
        className="search-bar__icon"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 20L16.5 16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        className="search-bar__input"
        type="text"
        name="artist"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Search for an artist"
      />
      <button type="submit" className="search-bar__button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
