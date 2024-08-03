import "../styles/card.css"

function Card(props) {
    if (props.thing === "The next thing will be revealed in: 00:00:00:00") {
      return (
        <div className="card noselect">
            <div className="card-header">
                <p className="number">#{props.number}</p>
            </div> 
            <h1 className="thing reveal">Reveal</h1>
        </div>
    );  
    } else {
    return (
            <div className="card noselect">
                <div className="card-header">
                    <p className="number">#{props.number}</p>
                </div> 
                <h1 className="thing">{props.thing}</h1>
            </div>
        );
    } 
    
    

}

export default Card;