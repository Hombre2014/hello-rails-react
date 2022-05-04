import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

const FETCH_GREETING = 'hello-rails-react/greetings/FETCH_GREETING';

const initialState = {
  greetings: []
};

function rootReducer(state, action) {
  switch (action.type) {
    case "GET_GREETINGS_SUCCESS":
      return { greetings: action.json.greetings };
    case "FETCH_GREETING":
      return action.payload;
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
    );
  return store;
}
