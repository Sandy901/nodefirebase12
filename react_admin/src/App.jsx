import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Logo from "./assets/logo.png";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="logo" className="logo" />
        <nav className="user_nav">
          <div className="user_nav__icon-box">
            <svg
              className="user_nav__icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>bookmark</title>
              <path d="M14 2v17l-4-4-4 4v-17c0-0.553 0.585-1.020 1-1h6c0.689-0.020 1 0.447 1 1z"></path>
            </svg>
            <span className="user_nav__notification">7</span>
          </div>
          <div className="user_nav__icon-box">
            <svg
              className="user_nav__icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>chat</title>
              <path d="M5.8 12.2v-6.2h-3.8c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h1v3l3-3h5c1.1 0 2-0.9 2-2v-1.82c-0.064 0.014-0.132 0.021-0.2 0.021l-7-0.001zM18 1h-9c-1.1 0-2 0.9-2 2v8h7l3 3v-3h1c1.1 0 2-0.899 2-2v-6c0-1.1-0.9-2-2-2z"></path>
            </svg>
            <span className="user_nav__notification">18</span>
          </div>

          <Link to={'/'} >
          <div className="user_nav__user">
            <img
              src={"https://picsum.photos/200/200"}
              alt="user picture"
              className="user_nav__user-photo"
            />
            <span className="user_nav__user-name">Tony</span>
          </div></Link>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="side_nav">
            <li className="side_nav__item side_nav__item--active">
              <a href="#" className="side_nav__link">
                <svg
                  className="side_nav__icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>home</title>
                  <path d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"></path>
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li className="side_nav__item">
              <a href="#" className="side_nav__link">
                <svg
                  className="side_nav__icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>mobile</title>
                  <path d="M14.004 0h-8.008c-1.102 0-1.996 0.894-1.996 1.996v16.007c0 1.103 0.894 1.997 1.996 1.997h8.007c1.103 0 1.997-0.894 1.997-1.996v-16.008c0-1.102-0.894-1.996-1.996-1.996zM10 19c-0.69 0-1.25-0.447-1.25-1s0.56-1 1.25-1 1.25 0.447 1.25 1-0.56 1-1.25 1zM14 16h-8v-14h8v14z"></path>
                </svg>

                <span>About Us</span>
              </a>
            </li>
            <li className="side_nav__item">
              <a href="#" className="side_nav__link">
                <svg
                  className="side_nav__icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>add-user</title>
                  <path d="M15.989 19.129c0.011-2.129-2.186-3.389-4.317-4.307-2.123-0.914-2.801-1.684-2.801-3.334 0-0.989 0.648-0.667 0.932-2.481 0.12-0.752 0.692-0.012 0.802-1.729 0-0.684-0.313-0.854-0.313-0.854s0.159-1.013 0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095-0.332-0.341-0.557-0.882 0.467-1.424-2.24-0.104-2.761 1.068-3.954 1.93-1.015 0.756-1.289 1.953-1.24 2.59 0.065 0.78 0.223 1.793 0.223 1.793s-0.314 0.17-0.314 0.854c0.11 1.718 0.684 0.977 0.803 1.729 0.284 1.814 0.933 1.492 0.933 2.481 0 1.65-0.212 2.21-2.336 3.124-2.131 0.917-2.794 2.387-2.783 4.516 0.003 0.637-0.011 0.871-0.011 0.871h16c0 0-0.014-0.234-0.011-0.871zM17 10v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                </svg>
                <span>Contact US</span>
              </a>
            </li>
            <li className="side_nav__item">
              <a href="#" className="side_nav__link">
                <svg
                  className="side_nav__icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>map</title>
                  <path d="M19.447 3.718l-6-3c-0.281-0.141-0.613-0.141-0.895 0l-5.63 2.815-5.606-1.869c-0.306-0.102-0.64-0.051-0.901 0.138s-0.415 0.49-0.415 0.811v13.001c0 0.379 0.214 0.725 0.553 0.894l6 3c0.141 0.070 0.294 0.106 0.447 0.106s0.307-0.035 0.447-0.106l5.63-2.814 5.606 1.869c0.305 0.1 0.64 0.049 0.901-0.139s0.415-0.49 0.415-0.81v-13.002c0.001-0.379-0.213-0.725-0.552-0.894zM8 5.231l4-2v11.763l-4 2v-11.763zM2 4l4 1.333v11.661l-4-2v-10.994zM18 16.227l-4-1.334v-11.662l4 2v10.996z"></path>
                </svg>
                <span>Portfolio</span>
              </a>
            </li>
          </ul>
          <div className="legal">
            &copy; 2022 by Shahzaib , All rights revised
          </div>
        </nav>
        <main className="hotel_view">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
