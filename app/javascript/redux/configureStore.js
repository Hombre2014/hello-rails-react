import { legacy_createStore as createStore } from 'redux';

const initialState = {
  greetings: [
    {
      message: 'Hello from me',
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    default:
      return state
  }
}

export default function configureStore() {
  const state = createStore(rootReducer, initialState);
  return state;
}
