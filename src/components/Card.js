import React from "react";

const Card = (props) => {

    return (
        <div className="card shadow d-inline-block m-3">
            <div className="card-header ">
                <img src="https://picsum.photos/200" className="shadow rounded-circle" alt="img" />
            </div>
            <div className="card-body">
                <p><strong>User Name: </strong>{props.userName}</p>
                <p><strong>Age:</strong> {props.ageA}</p>
                <p><strong>Occupation:</strong> {props.occu}</p>
                <p><strong>City: </strong>{props.citi}</p>
            </div>
        </div>

    )
}

export default Card;