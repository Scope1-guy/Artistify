export async function getArtistImage(artistName) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    artistName
  )}&prop=pageimages&format=json&pithumbsize=300&origin=*`;

  const response = await fetch(url);
  const data = await response.json();

  const page = Object.values(data.query.pages)[0];
  return page.thumbnail?.source;
}
