/* eslint-disable */
import {  useReducer } from "react";

const Example = () => {



   const initialState = {
        a: 0,
        b: 0,
        result: 0
    }

    const [state, dispatch] = useReducer((state, { type,payload }) => {
  
        switch (type) {
            case "change":
                const { name, value } = payload;
                return { ...state, [name]: value };
            case "plus":
                return {...state, result:state.a + state.b};
            case "minus":
                return {...state, result:state.a - state.b};
            case "multiply":
                return{...state, result:state.a * state.b};
            case "divide":
                return {...state, result:state.a / state.b};
        }
    }, initialState)


    const calcFn = (e) => {
        dispatch({ type:e.target.value })
    }
    const CALC_OPITONS = ["plus", "minus", "multiply", "divide"];
    
    const onChangeHandler = (e) =>{
        dispatch({type: 'change', payload: {name: e.target.name, value: parseInt(e.target.value)}});
      };
    

    return (
        <div style={{ margin: 20 }}>
            <div>
                <label style={{ marginRight: 10 }} htmlFor="id">a</label>
                <input name="a" type="number" id="id" value={state.a} onChange={onChangeHandler} />
            </div>
            <div>
                <label style={{ marginRight: 10 }} htmlFor="id2">b</label>
                <input name="b" type="number" id="id2" value={state.b} onChange={onChangeHandler} />
            </div>
            <select value={state.type} onChange={calcFn}>
                {CALC_OPITONS.map((type)=>(
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
            <h2>{`結果：${state.result}`}</h2>

        </div>
    )

}

export default Example;