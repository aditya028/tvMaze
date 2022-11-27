import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  return (
    <div className="card " style={{ width: "22%", margin: "10px" }}>
      <img
        src={movie.show.image.original}
        className="card-img-top"
        alt="..."
        style={{ height: "100%" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-lighter">{movie.show.name}</h5>
        <Link to={`/${movie.show.id}`} className="btn btn-primary">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Movies;
