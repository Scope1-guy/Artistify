import ArtistHeader from "../../components/ArtistHeader/ArtistHeader";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TrackList from "../../components/TrackList/TrackList";
import AlbumGrid from "../../components/AlbumGrid/AlbumGrid";
import SimilarArtistCard from "../../components/SimilarArtistCard/SimilarArtistCard";
import {
  getArtistInfo,
  getTopTracks,
  getAlbum,
  getSimilarArtist,
} from "../../services/lastfm";
import "./ArtistDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingState from "../../components/LoadingState/LoadingState";

/*
  The route for this page is /artist/:id (see App.js).
  Read the id with useParams() once you add the real data fetching,
  then use it to call the Last.fm artist.getInfo endpoint.
*/
function ArtistDetails() {
  const isFavorite = false;
  const { name } = useParams();
  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [similarArtists, setSimilarArtist] = useState([]);

  useEffect(() => {
    getArtistInfo(name).then((data) => {
      setArtist(data);
    });
  }, [name]);

  useEffect(() => {
    getTopTracks(name).then((data) => {
      setTopTracks(data);
    });
  }, [name]);

  useEffect(() => {
    getAlbum(name).then((data) => {
      setTopAlbums(data);
    });
  }, [name]);

  useEffect(() => {
    getSimilarArtist(name).then((data) => {
      setSimilarArtist(data);
    });
  }, [name]);

  if (!artist) return <LoadingState message="Loading artist....." />;
  console.log("artist state:", artist);
  // console.log("artist top track:", topTracks);
  // console.log("artist top album:", topAlbums);
  console.log("similar artist:", similarArtists);

  const cleanBio = artist.bio.content.split("<a href")[0];
  return (
    <div className="page-container page-section">
      <ArtistHeader
        artist={artist}
        isFavorite={isFavorite}
        onToggleFavorite={() => {}}
      />

      <section className="artist-details__section">
        <SectionHeader title="About" />
        <p className="artist-details__bio">{cleanBio}</p>
      </section>

      <section className="artist-details__section">
        <SectionHeader title="Top tracks" />
        <TrackList tracks={topTracks} />
      </section>

      <section className="artist-details__section">
        <SectionHeader title="Albums" />
        <AlbumGrid albums={topAlbums} />
      </section>

      <section className="artist-details__section">
        <SectionHeader title="Similar artists" />
        <div className="artist-details__similar">
          {similarArtists.map((artist) => (
            <SimilarArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ArtistDetails;
