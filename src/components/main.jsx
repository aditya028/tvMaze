import Movies from "./movies";
import Navbar from "./navbar";

const Main = ({ data }) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((mov) => (
            <Movies key={mov.show.id} movie={mov} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
