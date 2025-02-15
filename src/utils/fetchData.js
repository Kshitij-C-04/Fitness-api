export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
	 'x-rapidapi-key': 'a9c9c3e0e7msh9e99b9f10c38ea8p10e388jsn5943c2a2cbe5'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'a9c9c3e0e7msh9e99b9f10c38ea8p10e388jsn5943c2a2cbe5',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
