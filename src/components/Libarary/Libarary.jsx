import React, { useEffect } from "react";
import book from "../../assets/icons/Group 5.svg";
import { Link } from "react-router-dom";
import Card from "../Book/Card";
import BookService from "../../services/BookService";
import { useState } from "react";
import "./Libarary.css";
import BasicSelect from "../utils/BasicSelect";

export default function Libarary(props) {
  const [bookDetails, setBookDetails] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchBookDetails();
  });

  function fetchBookDetails() {
    if (filter === "")
      if (sortType === "DATABASE" || sortType === "")
        BookService.getAllBooks()
          .then((response) => {
            setBookDetails(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
  }

  const getSelectValue = (value) => {
    setSortType(value);
    if (value === "ASCENDING") {
      BookService.getAllInIncreasingOrder()
        .then((response) => {
          console.log(response);
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (value === "DESCENDING") {
      BookService.getAllInDecreasingOrder()
        .then((response) => {
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (value === "NEW_LAUNCH") {
      BookService.getBooksByNewLaunch()
        .then((response) => {
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (value === "PUBLISHED_YEAR") {
      BookService.getBooksByPublishingYear()
        .then((response) => {
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    BookService.getFilterBooks(filter)
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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

          <div className="search-bar">
            <input
              className="search"
              placeholder="Search..."
              name="filter"
              value={filter}
              onChange={searchHandler}
            ></input>
          </div>
          
            <Link to="/Home" className="link" id="home-link">
              <img
                src="https://www.freepnglogos.com/uploads/logo-home-png/home-start-blue-logo-icon-0.png"
                alt=""
                srcset=""
                className="home-imglogooo"
              />
            </Link>
         
          <span className="logo-content-home-links">
          
            <Link className="login-link link" to="/addBook">
              <button className="addbook-button">Add Book</button>
            </Link>
            <div className="cart-image-container">
              <Link to="/cart">
                <img
                  className="cart-image"
                  src="https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-shopping-cart-circle-icon.png"
                  alt="cart-img"
                />
              </Link>
            </div>
            {/* <img src="https://previews.123rf.com/images/sarahdesign/sarahdesign1410/sarahdesign141001115/32210120-logout-icon.jpg" className="logoutimg" alt="" srcset="" /> */}
            
          
          </span>
        </div>
      </header>
      <div className="welcome_header">
        <h2>Welcome to Book Store Libarary</h2>
      </div>

      <div className="book_count_sort_header">
        <span className="books__count">
          {"Books Count : " + bookDetails.length}
        </span>
        <BasicSelect
          headerName="Sort By Relevence"
          className="home__select"
          getSelectValue={getSelectValue}
        />
      </div>

      <div className="wrapper">
        {bookDetails.map((book) => {
          return (
            <div key={book.bookId}>
              <Card
                image={book.imageURL}
                title={book.bookName}
                description={book.description}
                rating={book.rating}
                quantity={book.quantity}
                id={book.bookId}
                price={book.bookPrice}
                author={book.authorName}
                button1="ADD TO CART"
                button2="WISHLIST"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
