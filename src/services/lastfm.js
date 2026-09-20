export async function searchArtists(query) {
  const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${encodeURIComponent(
    query
  )}&api_key=${apiKey}&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  const filtered = data.results.artistmatches.artist.filter((artist) => {
    return (
      !artist.name.includes(",") &&
      !artist.name.includes("&") &&
      !artist.name.includes("/")
    );
  });
  return filtered;
}

export async function getArtistInfo(artistName) {
  const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(
    artistName
  )}&api_key=${apiKey}&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  return data.artist;
}

export async function getSimilarArtist(artistName) {
  const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(
    artistName
  )}&api_key=${apiKey}&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  return data.artist.similar.artist;
}

export async function getTopTracks(artistName) {
  const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${encodeURIComponent(
    artistName
  )}&api_key=${apiKey}&format=json&limit=10`;

  const response = await fetch(url);
  const data = await response.json();

  return data.toptracks.track;
}

export async function getAlbum(artistName) {
  const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${encodeURIComponent(
    artistName
  )}&api_key=${apiKey}&format=json&limit=20`;

  const response = await fetch(url);
  const data = await response.json();

  return data.topalbums.album;
}
