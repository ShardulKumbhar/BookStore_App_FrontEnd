import React from "react";
import book1 from "../../assets/Images/Image 18.png";
import CartService from "../../services/CartService";
import "./Card.css";


export default function Card(props) {
  const cardHandler = (e) =>{
    const bookId = props.id;
    console.log(props.id)
    console.log(props.title)
    CartService.addBookToCart(bookId)
    .then((response)=>{
      console.log(response)
      alert(response.data.message)
      // props.history.push({
      //   pathname: "/cart",
      // });
    })
    .catch((error)=>{
      console.log(error)
      alert(error.response.data.message)
    })

  }

  return (
    <div key={props.id} className="bookCard">
    <div className="card__body">
      <div className="card__image__container">
        <img
          className="card__image"
          src={(props.image && props.image) || book1}
          alt=""
        />
      </div>
      <div className="card__title__author">
        <h2 className="card__title">{props.title}</h2>
        <span className="card__author">by {props.author}</span>
      </div>
      <span className="card__price">Rs.{props.price}</span>
      <span className="card__rating"> {"rating: "+props.rating}</span>
    </div>
    <div className="card__button">
      <button onClick={cardHandler} className="card__add_button">{props.button1}</button>
      <button className="card__wishlist_button">{props.button2}</button>
    </div>
  </div>
);
}