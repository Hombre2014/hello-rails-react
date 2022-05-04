import React from "react";
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting Message: {this.props.greetingMessage}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  greetingMessage: PropTypes.string
};

export default Greeting;
