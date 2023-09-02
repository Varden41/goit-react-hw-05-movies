const BASE_URL = 'https://api.themoviedb.org/3';
const searchParams = new URLSearchParams({
  api_key: 'e87ebc5dcf897b76d99de597879fdbaf',
});

// Trending
export async function fetchMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?${searchParams}`
    );
    const parsed = await response.json();
    const movies = parsed.results;
    return movies;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

// search movies

export async function fetchSearchedMovies(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: 'e87ebc5dcf897b76d99de597879fdbaf',
    query: searchQuery,
  });
  try {
    const response = await fetch(`${BASE_URL}/search/movie?${searchParams}`);
    const parsed = await response.json();
    const movies = parsed.results;
    return movies;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

// movies details

export async function fetchChosenMovie(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?${searchParams}`
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

//movies cast

export async function fetchChosenCast(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?${searchParams}`
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error(console.log(error));
  }
}
// movies reviews

export async function fetchChosenReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?${searchParams}`
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error(console.log(error));
  }
}
