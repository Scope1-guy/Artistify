import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import ArtistGrid from "../../components/ArtistGrid/ArtistGrid";
// import { searchResultsArtists } from "../../data/placeholderData";
import "./SearchResults.css";
import { useEffect, useState } from "react";
import { searchArtists } from "../../services/lastfm";
import EmptyState from "../../components/EmptyState/EmptyState";

/*
  This page currently always shows the "results found" view using
  placeholder data. Once you add useState + useEffect for the real
  search, swap the <ArtistGrid> below for logic like:

    {status === "loading" && <LoadingState message="Searching artists..." />}
    {status === "error" && <ErrorState onRetry={runSearch} />}
    {status === "empty" && <EmptyState title="No artists found" />}
    {status === "success" && <ArtistGrid artists={results} />}

  LoadingState, EmptyState and ErrorState components already exist in
  src/components and are ready to use — see PROJECT_GUIDE.txt.
*/
function SearchResults() {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [searchTerm, setSearchTerm] = useState(query || "");

  // const [query, setQuery] = useState("");
  // const query = "Tolibian";
  const resultCount = results.length;

  const navigate = useNavigate();
  function handleSearchSubmit() {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  }

  useEffect(() => {
    if (!query) return;
    searchArtists(query).then((data) => {
      setResults(data);
    });
  }, [query]);

  console.log(results);

  return (
    <div className="page-container page-section">
      <div className="search-results__bar">
        <SearchBar
          placeholder="Search for an artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={handleSearchSubmit}
        />
      </div>

      {!query ? (
        <EmptyState title="Type Something to Search" />
      ) : (
        <>
          <div className="search-results__heading">
            <h1 className="search-results__title">Results for “{query}”</h1>
            <p className="search-results__count">{resultCount} artists found</p>
          </div>
          <ArtistGrid artists={results} />
        </>
      )}
    </div>
  );
}

export default SearchResults;
