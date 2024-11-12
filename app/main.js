import "./style.css";
const movies = [
  {
    title: "Inception",
    releaseYear: 2010,
    moviePoster:
      "https://i.etsystatic.com/6232891/r/il/37da98/263664878/il_570xN.263664878.jpg",
    altText: "Inception movie poster",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  },
  {
    title: "The Shawshank Redemption",
    releaseYear: 1994,
    moviePoster: "https://example.com/shawshank.jpg",
    altText: "The Shawshank Redemption movie poster",
    actors: ["Tim Robbins", "Morgan Freeman"],
  },
  {
    title: "The Dark Knight",
    releaseYear: 2008,
    moviePoster: "https://example.com/dark-knight.jpg",
    altText: "The Dark Knight movie poster",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
  {
    title: "Pulp Fiction",
    releaseYear: 1994,
    moviePoster: "https://example.com/pulp-fiction.jpg",
    altText: "Pulp Fiction movie poster",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
  },
  {
    title: "The Godfather",
    releaseYear: 1972,
    moviePoster: "https://example.com/godfather.jpg",
    altText: "The Godfather movie poster",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    title: "Forrest Gump",
    releaseYear: 1994,
    moviePoster: "https://example.com/forrest-gump.jpg",
    altText: "Forrest Gump movie poster",
    actors: ["Tom Hanks", "Robin Wright"],
  },
  {
    title: "Fight Club",
    releaseYear: 1999,
    moviePoster: "https://example.com/fight-club.jpg",
    altText: "Fight Club movie poster",
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  },
  {
    title: "The Matrix",
    releaseYear: 1999,
    moviePoster: "https://example.com/matrix.jpg",
    altText: "The Matrix movie poster",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  },
  {
    title: "Star Wars: A New Hope",
    releaseYear: 1977,
    moviePoster: "https://example.com/star-wars.jpg",
    altText: "Star Wars: A New Hope movie poster",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
  },
  {
    title: "Gladiator",
    releaseYear: 2000,
    moviePoster: "https://example.com/gladiator.jpg",
    altText: "Gladiator movie poster",
    actors: ["Russell Crowe", "Joaquin Phoenix"],
  },
  {
    title: "Jurassic Park",
    releaseYear: 1993,
    moviePoster: "https://example.com/jurassic-park.jpg",
    altText: "Jurassic Park movie poster",
    actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    moviePoster: "https://example.com/fellowship.jpg",
    altText: "The Fellowship of the Ring movie poster",
    actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
  },
  {
    title: "Titanic",
    releaseYear: 1997,
    moviePoster: "https://example.com/titanic.jpg",
    altText: "Titanic movie poster",
    actors: ["Leonardo DiCaprio", "Kate Winslet"],
  },
  {
    title: "Avatar",
    releaseYear: 2009,
    moviePoster: "https://example.com/avatar.jpg",
    altText: "Avatar movie poster",
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
  },
  {
    title: "Avengers: Endgame",
    releaseYear: 2019,
    moviePoster: "https://example.com/endgame.jpg",
    altText: "Avengers: Endgame movie poster",
    actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
  },
  {
    title: "Back to the Future",
    releaseYear: 1985,
    moviePoster: "https://example.com/back-to-future.jpg",
    altText: "Back to the Future movie poster",
    actors: ["Michael J. Fox", "Christopher Lloyd"],
  },
  {
    title: "Toy Story",
    releaseYear: 1995,
    moviePoster: "https://example.com/toy-story.jpg",
    altText: "Toy Story movie poster",
    actors: ["Tom Hanks", "Tim Allen"],
  },
  {
    title: "Schindler's List",
    releaseYear: 1993,
    moviePoster: "https://example.com/schindler.jpg",
    altText: "Schindler's List movie poster",
    actors: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
  },
  {
    title: "Interstellar",
    releaseYear: 2014,
    moviePoster: "https://example.com/interstellar.jpg",
    altText: "Interstellar movie poster",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  },
  {
    title: "The Lion King",
    releaseYear: 1994,
    moviePoster: "https://example.com/lion-king.jpg",
    altText: "The Lion King movie poster",
    actors: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons"],
  },
];

movies.forEach((movie) => {
  const cardHTML = `<div class="card bg-zinc-950  my-10 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${movie.title}</h2>
    <p>${movie.actors.join(", ")}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

`;

  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", cardHTML);
});
