import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_GREETINGS_REQUEST = "GET_GREETINGS_REQUEST";

function getGreetings() {
  console.log('getGreetings(), Action!');
  return {
    type: 'GET_GREETINGS_REQUEST'
  };
};

class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting Message: {this.props.greetingMessage}
        <button className="btn btn-more" onClick={() => this.props.getGreetings()}>Get another greeting</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

Greeting.propTypes = {
  greetingMessage: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
