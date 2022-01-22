let base_uri = "http://0.0.0.0:9876";

const getAlbumTracks = async (name, artist) => {
  const res = await fetch(
    base_uri +
      "/albums/" +
      encodeURIComponent(name.replaceAll("/", "|")) +
      "::" +
      encodeURIComponent(artist.replaceAll("/", "|"))
  );

  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();

  return data;
};

const getAlbumArtists = async (name, artist) => {
  const res = await fetch(
    base_uri +
      "/album/" +
      encodeURIComponent(name.replaceAll("/", "|")) +
      "/" +
      encodeURIComponent(artist.replaceAll("/", "|")) +
      "/artists"
  );

  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();
  return data.artists;
};

const getAlbumBio = async(name, artist) => {
  const res = await fetch(
    base_uri + 
    "/album/" +
    encodeURIComponent(name.replaceAll("/", "|")) +
    "/" +
    encodeURIComponent(artist.replaceAll("/", "|")) +
    "/bio"
  );

  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();
  return data.bio;
};

export default {
  getAlbumTracks,
  getAlbumArtists,
  getAlbumBio
};