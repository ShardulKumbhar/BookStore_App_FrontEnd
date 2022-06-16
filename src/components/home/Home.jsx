import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./Home.css";
import book from "../../assets/icons/Group 5.svg";
import bookstore from "../../assets/icons/icons8-bookstore-64.png";

export default function Home() {
  return (
    <div>
      <div className="home">
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
        <h1 className="homee">Home</h1>
        <div className="headlines">
          <p>
            Welcome to the bookseller! Buy your own books at your pleasure.
            Please sign in to see our catalog.
          </p>
        </div>
        <div className="homeimg">
          <img
            src="https://cdn.pixabay.com/photo/2016/09/16/09/20/books-1673578_960_720.png"
            className="Imagehome"
            alt=""
            srcset=""
          />
        </div>

        <Link to="/login" className="loggin">
          <img
            src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-login-icon-button-126998484.jpg"
            alt=""
            srcset=""
          />
        </Link>
      </div>

      <Link to="/signUp">
        <img
          src="https://lutonmuslimjournal.com/wp-content/uploads/2018/09/register-icon-blue1.png"
          alt=""
          srcset=""
        />
      </Link>
    </div>
  );
}
