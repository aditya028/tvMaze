import { useParams, Link } from "react-router-dom";
import Card from "./card";
import Navbar from "./navbar";

const MovieDetail = ({ movies }) => {
  const { id: movieId } = useParams();
  const [movie] = movies.filter((m) => movieId == m.show.id);
  if (!movie) return <h1>Oops...Movies not found</h1>;
  return (
    <div className="container">
      <Navbar />
      <h1 className="display-3">{movie.show.name}</h1>
      <div className="row">
        <div className="col-sm w-25">
          <img src={movie.show.image.original} className="w-100" alt="" />
        </div>
        <div className="col-sm">
          <h3 className="display-5">Summary</h3>
          {movie.show.summary}
          <br />
          <Link
            to={`/form/${movie.show.id}`}
            className="btn btn-primary mx-auto"
            style={{ margin: "100px" }}
          >
            Book Ticket
          </Link>
        </div>
        <div className="col-sm">
          <Card info={movie.show} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
