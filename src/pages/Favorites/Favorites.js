import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ArtistGrid from "../../components/ArtistGrid/ArtistGrid";
// import EmptyState from "../../components/EmptyState/EmptyState";
import { favoriteArtists } from "../../data/placeholderData";
import "./Favorites.css";

/*
  This page currently always shows the "has favorites" view using
  placeholder data. Once you read favorites from localStorage, swap
  the block below for something like:

    {favorites.length === 0 ? (
      <EmptyState
        title="No favorites yet"
        description="Save artists you like and they'll show up here."
      />
    ) : (
      <ArtistGrid artists={favorites} />
    )}

  The EmptyState markup is left below (commented out) so you can see
  what it looks like without deleting the working example above it.
*/
function Favorites() {
  return (
    <div className="page-container page-section">
      <SectionHeader
        title="Your favorites"
        subtitle="Artists you've saved for quick access later."
      />

      <ArtistGrid artists={favoriteArtists} />

      {/*
        <EmptyState
          title="No favorites yet"
          description="Save artists you like and they'll show up here."
        />
      */}
    </div>
  );
}

export default Favorites;
