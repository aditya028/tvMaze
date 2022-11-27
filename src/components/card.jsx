const Card = ({ info }) => {
  return (
    <div className="card border-info mb-3" style={{ maxWidth: "23rem" }}>
      <div className="card-header">Show Info</div>
      <div className="card-body text-info">
        <span className="lead ">Network : </span>
        <span className="lead" style={{ color: "black" }}>
          {info.network === null ? "NA" : info.network.name}
        </span>
        <br />
        <span className="lead ">Schedule : </span>
        <span className="lead" style={{ color: "black" }}>
          {info.schedule.days[0]} {info.schedule.time}
        </span>
        <br />
        <span className="lead ">Status : </span>
        <span className="lead" style={{ color: "black" }}>
          {info.status}
        </span>
        <br />
        <span className="lead ">Show Type : </span>
        <span className="lead" style={{ color: "black" }}>
          {info.type}
        </span>
        <br />
        <span className="lead ">Genre : </span>
        <span className="lead" style={{ color: "black" }}>
          {info.genres[0]}
        </span>
        <br />
        <span className="lead ">Official Site : </span>
        <span className="lead" style={{ color: "black" }}>
          {info.network === null ? "NA" : info.network.officialSite}
        </span>
        <br />
      </div>
    </div>
  );
};

export default Card;
