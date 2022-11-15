// /* eslint-disable */
import { useReducer,useEffect} from "react";
import reducer from "../reducers";
import EventForm from "../Components/EventForm";
import Events from "../Components/Events";
import AppContext from "../contexts/AppContext";
import OperationLogs from "../Components/OperationLogs"

const Home = () => {
  const appState = localStorage.getItem("appWithRedux");
  const initialState = appState ? JSON.parse(appState) : {events:[],operationLogs:[] }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("appWithRedux", JSON.stringify(state))
  }, [state])

  return (
    <>
    <AppContext.Provider value={{state,dispatch}} >
      <EventForm />
      <Events />
      <OperationLogs />
      </AppContext.Provider>
    </>
  )


};

export default Home;