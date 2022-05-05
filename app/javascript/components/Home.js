import React from "react";

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='container'>
          <h1>Rails React Demo App</h1>
          <a onClick={() => {window.location.href="/hello"}} className="link">Greetings</a>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
