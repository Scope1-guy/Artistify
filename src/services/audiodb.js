export async function getArtistImage(artistName) {
  const apiKey = process.env.REACT_APP_AUDIODB_API_KEY;
  const url = `https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${encodeURIComponent(
    artistName
  )}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.artists?.[0]?.strArtistThumb;
}
