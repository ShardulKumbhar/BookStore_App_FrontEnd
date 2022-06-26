import { Link } from "react-router-dom";
import "./Home.css";
import book from "../../assets/icons/Group 5.svg";
import video from "../../assets/video/bookvideo.mp4";

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

        {/* <div className="home-video-spam">
        <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
      </video>
      </div> */}

        <div className="homeimg">
          <img
            src="https://us.123rf.com/450wm/sergeypykhonin/sergeypykhonin1809/sergeypykhonin180900041/108230283-registration-register-logo-or-label-diary-note-icon-vector-illustration.jpg?ver=6"
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
