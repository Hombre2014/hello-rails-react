import Axios from 'axios';

const GET_GREETING = 'hello-rails-react/greetings/GET_GREETING';

const fetchGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

const initialState = [];

export const fetchGreetingApi = () => async (dispatch) => {
  const returnValue = await Axios.get('/v1/greetings');
  const greeting = returnValue.data.data.greeting.message
  console.log(greeting)
  dispatch(fetchGreeting(greeting));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
