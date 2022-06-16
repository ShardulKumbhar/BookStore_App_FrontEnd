import React, { useEffect } from "react";
import book from "../../assets/icons/Group 5.svg";
import { Link } from "react-router-dom";
import Card from "../Book/Card";
import BookService from "../../services/BookService";
import { useState } from "react";

export default function Libarary() {
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    fetchBookDetails();
  });

  function fetchBookDetails() {
    BookService.getAllBooks()
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <header className="header-content header">
        <div className="logo-content">
          <img
            src={book}
            alt="logo-content"
            className="logo-content-img"
            width=""
          />
        </div>
      </header>

      <h1>Welcome to Book Store {localStorage.getItem("email")}</h1>

      <div>
        <Link to="/addBook" className="link">
          <button>Add Book</button>
        </Link>
      </div>

      <div className="wrapper">
        {bookDetails.map((book) => {
          return (
            <Card
              image={book.imageURL}
              title={book.bookName}
              description={book.description}
              rating={book.rating}
              quantity={book.quantity}
              id={book.bookId}
              price={book.bookPrice}
              author={book.authorName}
            />
          );
        })}
      </div>
    </div>
  );
}
