// import Rating from "./Rating";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="card">
      {/* <Rating></Rating> */}
      <div className="thumb"></div>
      <h2 className="title">Title</h2>
    </div>
  );
};

export default MovieCard;