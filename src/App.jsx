import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

function App() {
  const movies = [
    {
      title: "V for Vandetta",
      poster:
        "http://i.ebayimg.com/00/s/NTAwWDMzMw==/z/VIsAAOxyaTxTWIqs/$_3.JPG?set_id=2",
      rating: 5,
    },
    {
      title: "The Detachement",
      poster:
        "https://www.joblo.com/assets/images/oldsite/posters/images/full/detachment-french-poster.jpg",
      rating: 4,
    },
    {
      title: "The experiment",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51UFOnvEviL.jpg",
      rating: 5,
    },
    {
      title: "Inception",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      rating: 4,
    },
  ];
  return (
    <div className="App">
      <Header />
      {movies.map((movie) => (
        <MovieCard />
      ))}
    </div>
  );
}

export default App;