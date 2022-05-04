import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Axios from 'axios';

const GET_GREETINGS_REQUEST = "GET_GREETINGS_REQUEST";
const GET_GREETINGS_SUCCESS = "GET_GREETINGS_SUCCESS";
const FETCH_GREETING = 'hello-rails-react/greetings/FETCH_GREETING';

const fetchGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

// function getGreetings() {
//   console.log('getGreetings(), Action!');
//   return dispatch => {
//     dispatch({ type: GET_GREETINGS_REQUEST});
//     return fetch('v1/greetings.json')
//       .then(response => response.json())
//       .then(json => dispatch(getGreetingsSuccess(json)))
//       .catch(error => console.log(error));
//   };
// };

export const getGreetings = () => async (dispatch) => {
  const returnValue = await Axios.get('/v1/greetings');
  const greeting = returnValue.data.data.greeting.message
  console.log(greeting);
  dispatch(fetchGreeting(greeting));
};


export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

class Greeting extends React.Component {
  render () {
    const { greetings } = this.props;
    const greetingsList = greetings.map((greeting) => {
      return (<p>{greeting}</p>);
    })

    return (
      <React.Fragment>
        Greeting Message: {this.props.greetingMessage}
        <button className="btn btn-more" onClick={() => this.props.getGreetings()}>Get another greeting</button>
        <br />
        <div>{ greetingsList }</div>
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
