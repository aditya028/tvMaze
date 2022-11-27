import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

const Form = ({ movies }) => {
  const [input, setInput] = useState({ name: "", address: "", ticket: "" });
  const [bookedTicket, setBookedTicket] = useState([]);
  const { id: movieId } = useParams();
  const [movie] = movies.filter((m) => movieId == m.show.id);
  if (!movie) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const BT = [...bookedTicket];
    BT.push(input);
    setBookedTicket(BT);
  };

  const hanldeChange = ({ target }) => {
    const currentState = { ...input };
    currentState[target.name] = target.value;
    setInput(currentState);
  };

  return (
    <div className="container">
      <Navbar />
      <h4 className="display-3">
        Book Ticket for {movie.show.name} (Rating :{" "}
        {movie.show.rating.average || "NA"})
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputName">Name</label>
          <input
            className="form-control"
            id="InputName"
            placeholder="Enter Name"
            value={input.name}
            onChange={hanldeChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputAddress">Address</label>
          <input
            className="form-control"
            id="InputAddress"
            placeholder="Enter Address"
            value={input.address}
            onChange={hanldeChange}
            name="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="FormControlSelect1">Number Of Tickets</label>
          <input
            className="form-control"
            id="InputTicket"
            placeholder="Enter Number of Tickets"
            value={input.ticket}
            onChange={hanldeChange}
            name="ticket"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => alert("Ticket Booked")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
