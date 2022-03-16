

  
  
function Card(props){
  return(
      <>
       <div className="card">
            <img className="imgSize"
                src={props.imgsrc}
                alt="Card demos"
                width="10%"
                height="250"
            />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <h4 className="card-text">{props.sname}</h4>
                <h6 className="card-title">{props.country}</h6>
                <p className="card-title">{props.city}</p>
                <p className="card-title">{props.contact}</p>
                <p className="card-title">{props.education}</p>
                <p className="card-title">{props.zipcode}</p>
                <p className="card-title">{props.idno}</p>
                <p className="card-title">{props.laptop}</p>
                
                <a href={props.link} className="btn btn-primary stretched-link">
                    <button>Click Here</button>
                </a>
            </div>
            <hr /><br />
        </div>
        
      </>
  );
}

  export default Card;