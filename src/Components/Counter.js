import CounterButton from "./CounterButton";
import CounterResult from "./CounterResu,lt";

const Counter = () =>{

    return(
    <>
    <CounterResult />
    <CounterButton calcType={"+"} step={2} />
    <CounterButton calcType={"+"} step={10} />
    <CounterButton calcType={"-"} step={2} />
    <CounterButton calcType={"-"} step={10} />
    <CounterButton calcType={"reset"}  />
    
    </>
    )
}

export default Counter;