const posterWidth300 = "https://image.tmdb.org/t/p/w300";

// Get trending movies preview
async function getTrendingMoviesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);

  const data = await res.json();
  const movies = data.results;

  // Creates the carousel section
  movies.forEach((movie) => {
    const sectionCarousel = document.getElementById("carousel");
    const movieImg = document.createElement("img");

    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute("src", `${posterWidth300}/${movie.poster_path}`);

    sectionCarousel.appendChild(movieImg);
  });
}

getTrendingMoviesPreview();
