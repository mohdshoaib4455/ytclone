export const FetchDataBySearch = async (query) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  console.log(query)
  const Response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`
  );
  const Data = await Response.json();
  return Data.items;
};

