const posterWidth300 = "https://image.tmdb.org/t/p/w300";

// Get trending movies preview
async function getTrendingMoviesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);

  const data = await res.json();
  const movies = data.results;

  // Creates the carousel section
  movies.forEach((movie) => {
    const sectionCarousel = document.getElementById("carousel");
    const divImg = document.createElement("div");
    const movieImg = document.createElement("img");

    divImg.setAttribute("class", "carousel-item");

    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute("src", `${posterWidth300}/${movie.poster_path}`);

    divImg.appendChild(movieImg);
    sectionCarousel.appendChild(divImg);
  });
}

// Get the common genres section preview
async function getGenresPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);

  const data = await res.json();
  const genres = data.genres;

  genres.forEach((genre) => {
    const sectionGenresPreview = document.getElementById("common-genres");
    const genreButton = document.createElement("button");

    genreButton.innerHTML = `${genre.name}`;
    sectionGenresPreview.appendChild(genreButton);
  });
}

getTrendingMoviesPreview();
getGenresPreview();
