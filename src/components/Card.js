function Card(props) {
  function handleClick(dishName) {
    console.log(`You selected: ${dishName}`);
  }

  const data = props.data;

  return (
    <div className="card border-0 m-1 shadow">
      <img src={data.imageUrl} alt={data.name} className="card-img-top" />
      <div className="text-capitalize border">{data.adNumber}</div>

      <div className="card-body">
        <h2 className="card-title ">{data.name}</h2>
        <div className="card-text">{data.description}</div>
        <hr></hr>
        <div>
        <i class="bi bi-telephone m-1"></i>
          {data.phoneNumber}
        </div>
        <hr></hr>
        <div>
        <i class="bi bi-geo m-1"></i> 
          {data.address}
        </div>

        <button
          onClick={() => handleClick(data.name)}
          className="btn btn-primary"
        >
          Visit Website
        </button>
      </div>
    </div>
  );
}

export default Card;
