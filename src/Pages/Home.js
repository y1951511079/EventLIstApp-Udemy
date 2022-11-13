import {useState} from "react";
const Home = () => {
    const [ count, setCount] = useState(0);
    const countUp = () => setCount((prev)=>prev+1);
    const countUp2 = () => setCount((prev)=>prev*2);
    const resetB = () =>setCount(prev => prev=0);
    const triple = () =>setCount(prev =>  prev % 3 === 0 ? prev/3 : prev
    );
    return(
    <>
    <button onClick={countUp}>カウントアップ</button>
    <button onClick={countUp2}>カウントアップ2</button>
    <p>{count}</p>
    <button onClick={resetB}>リセット</button>
    <button onClick={triple}>３の倍数の時だけ３で割る</button>
    </>  
    )
      
  
  };
  
  export default Home;