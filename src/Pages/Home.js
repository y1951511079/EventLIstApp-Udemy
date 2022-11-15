/* eslint-disable */
import { useReducer, useEffect } from "react";
import reducer from "../reducers";
import EventForm from "../Components/EventForm";
import Events from "../Components/Events";
const Home = () => {
  const appState = localStorage.getItem("appWithRedux");
  const initialState = appState ? JSON.parse(appState) : []
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("appWithRedux", JSON.stringify(state))
  }, [state])

  return (
    <>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />

    </>
  )


};

export default Home;