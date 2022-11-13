import { Link } from "react-router-dom";
const Page2 = () => {
    return(
      <div>
        <h1>Page2ペ―ジです。</h1>
        <Link to="./100">URL Parameter</Link>
        <Link to="./100?name=hoge">Query Parameter</Link>
      </div>
    )
  };
  export default Page2;
  