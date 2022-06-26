import React from "react";
import book1 from "../../assets/Images/Image 18.png";

import "./summary.css";

export default function Summary(props) {
  return (
    <div key={props.id} className="bookCardss">
     
        <div className="card__bodyss">
          <div className="card__image__containerss">
            <img
              className="card__imagess"
              src={(props.image && props.image) || book1}
              alt=""
            />
          </div>

          <h2 className="card__titless">{props.title}</h2>
          <text className="card__authorss">by {props.author}</text>
          <span className="card__pricess">Rs.{props.price}</span>

          {/* <p className="card__decription"> </p> */}
        </div>
        <div className="card__button">
          <button className="card__add_buttonss">Checkout</button>
          <button className="card__wishlist_buttonss">Remove</button>
        </div>
      
    </div>
  );
}
