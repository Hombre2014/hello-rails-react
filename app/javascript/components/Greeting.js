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
        <a onClick={() => dispatch(fetchGreetingApi())} className="link">Get another greeting</a>
        <a onClick={() => {window.location.href="/"}} className="link">Home</a>
    </div>
  );
}

export default Greeting
