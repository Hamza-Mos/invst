import React from 'react';
import SignUpScreen from './SignUpScreen';
import './Login.css';

function LogIn() {
    return (
      <div
        className="login-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://thumbs.dreamstime.com/b/stock-market-graph-big-data-visualization-investment-graph-concept-stock-market-graph-big-data-visualization-investment-graph-145653496.jpg")`,
        }}
      >
        <div className="loginScreen__background">
          <img
            className="loginScreen_logo"
            src="https://thumbs.dreamstime.com/b/stock-market-graph-big-data-visualization-investment-graph-concept-stock-market-graph-big-data-visualization-investment-graph-145653496.jpg"
            alt="Hello"
          />

          <div className="loginScreen__gradient" />
        </div>
      </div>
    );
}

export default LogIn;