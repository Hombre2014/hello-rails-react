import React, { useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingApi } from '../redux/greetings';

const Greeting =() => {
  const greeting = useSelector((state) => state.greetingsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchGreetingApi());
  }, [dispatch]);

  return (
      <div className="greetings">
        <h1>Rails React Demo App</h1>
        <h2 className="text">{ greeting }</h2>
        <button onClick={() => dispatch(fetchGreetingApi())} className="link">Get another greeting</button>
        <a href="/" className="link">Home</a>
    </div>
  );
}

export default Greeting
