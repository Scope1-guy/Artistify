/*
  Placeholder data only.

  Everything in this file exists so the UI has something realistic to show
  before the Last.fm API is connected. Replace these with data from your
  fetch calls — the shapes here are a guide for what to keep from the
  Last.fm response (artist.getInfo, artist.search, artist.getTopTracks,
  artist.getTopAlbums, artist.getSimilar).
*/

export const trendingArtists = [
  {
    id: "burna-boy",
    name: "Burna Boy",
    image: "https://picsum.photos/seed/burnaboy/600/600",
    genres: ["Afrobeats", "Afrobeat", "Nigerian"],
    listeners: "1.8M",
  },
  {
    id: "tems",
    name: "Tems",
    image: "https://picsum.photos/seed/tems/600/600",
    genres: ["Afrobeats", "R&B", "Soul"],
    listeners: "742K",
  },
  {
    id: "fela-kuti",
    name: "Fela Kuti",
    image: "https://picsum.photos/seed/felakuti/600/600",
    genres: ["Afrobeat", "Funk", "Jazz"],
    listeners: "980K",
  },
  {
    id: "asake",
    name: "Asake",
    image: "https://picsum.photos/seed/asake/600/600",
    genres: ["Afrobeats", "Amapiano"],
    listeners: "615K",
  },
  {
    id: "wizkid",
    name: "Wizkid",
    image: "https://picsum.photos/seed/wizkid/600/600",
    genres: ["Afrobeats", "Pop"],
    listeners: "2.1M",
  },
  {
    id: "amaarae",
    name: "Amaarae",
    image: "https://picsum.photos/seed/amaarae/600/600",
    genres: ["Alt R&B", "Afropop"],
    listeners: "301K",
  },
];

export const searchResultsArtists = trendingArtists;

export const featuredGenres = [
  "Afrobeats",
  "Amapiano",
  "Highlife",
  "Alte",
  "Afro-fusion",
  "Gqom",
];

export const artistDetails = {
  id: "burna-boy",
  name: "Burna Boy",
  image: "https://picsum.photos/seed/burnaboy-large/900/900",
  genres: ["Afrobeats", "Afrobeat", "Nigerian"],
  listeners: "1,842,933",
  playcount: "94,201,447",
  bio:
    "Burna Boy is a Nigerian singer, songwriter and record producer known for " +
    "blending Afrobeats, dancehall, and highlife into what he calls " +
    '"Afro-fusion." Since breaking through in the early 2010s, he has ' +
    "become one of the most streamed African artists in the world, known " +
    "for socially conscious lyrics and genre-spanning collaborations.",
};

export const topTracks = [
  { id: "t1", name: "Last Last", duration: "3:15", playcount: "182M" },
  { id: "t2", name: "Ye", duration: "3:37", playcount: "310M" },
  { id: "t3", name: "On the Low", duration: "4:16", playcount: "154M" },
  { id: "t4", name: "Kilometre", duration: "3:33", playcount: "98M" },
  { id: "t5", name: "Common Person", duration: "3:22", playcount: "77M" },
];

export const albums = [
  {
    id: "a1",
    title: "Love, Damini",
    cover: "https://picsum.photos/seed/lovedamini/500/500",
    year: 2022,
  },
  {
    id: "a2",
    title: "Twice as Tall",
    cover: "https://picsum.photos/seed/twiceastall/500/500",
    year: 2020,
  },
  {
    id: "a3",
    title: "African Giant",
    cover: "https://picsum.photos/seed/africangiant/500/500",
    year: 2019,
  },
  {
    id: "a4",
    title: "Outside",
    cover: "https://picsum.photos/seed/outsidealbum/500/500",
    year: 2018,
  },
];

export const similarArtists = [
  {
    id: "wizkid",
    name: "Wizkid",
    image: "https://picsum.photos/seed/wizkid-similar/400/400",
  },
  {
    id: "davido",
    name: "Davido",
    image: "https://picsum.photos/seed/davido/400/400",
  },
  {
    id: "tems",
    name: "Tems",
    image: "https://picsum.photos/seed/tems-similar/400/400",
  },
  {
    id: "rema",
    name: "Rema",
    image: "https://picsum.photos/seed/rema/400/400",
  },
];

export const favoriteArtists = trendingArtists.slice(0, 3);
