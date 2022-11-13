
import {Link, useNavigate} from "react-router-dom"
const Page1 = () => {
  const navigate = useNavigate();
  const onClickDetail1 = () => navigate("/page1/detail1");
    return(
      <div>
        <h1>Page1ペ―ジです。</h1>
        <Link to={{pathname: "/page1/detail1"}}>Detail1</Link>
        <Link to="/page1/detail2">Detail2</Link>
        <br />
        <button onClick={onClickDetail1} >Detail1</button>
      </div>
    )
  
  };
  
  export default Page1;
  