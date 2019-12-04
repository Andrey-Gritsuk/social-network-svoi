import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://image.flaticon.com/icons/svg/783/783347.svg"
          alt="global logo"
        />
      </header>

      <nav className="nav">
        <div>
          <a href="#q1">Profile</a>
        </div>
        <div>
          <a href="#q2">Messages</a>
        </div>
        <div>
          <a href="#q3">News</a>
        </div>
        <div>
          <a href="#q4">Music</a>
        </div>
        <div>
          <a href="#q5">Settings</a>
        </div>
      </nav>

      <div className="content">
        <img
          src="https://foter.com/photos/394/yellow-taxi-on-city-street.jpg"
          alt="account wallpaper"
        />
        <div>
          <div> Ava +description</div>
          <div>
            My posts
            <div>New post</div>
            <div>
              <div>post 1</div>
              <div>post 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
