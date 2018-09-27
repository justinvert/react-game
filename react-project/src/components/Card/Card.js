import React from "react";
import "./Card.css";

const Card = props => (

  <div className="card">
  <div className="card-body">
    <h5 className="card-title"> {props.name}</h5>
  
     <img alt={props.id} src={props.image} />
     <span onClick={() => props.clickTest(props.id)} className="clickTest">test</span>
  </div>
</div>

    /* <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>   */
  );

  export default Card;