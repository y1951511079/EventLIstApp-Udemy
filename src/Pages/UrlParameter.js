
import { useParams, useLocation} from "react-router-dom";
const UrlParameter = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  // console.log(location);
  // const query = new URLSearchParams(search);

    return(
      <div>
        <h1>UrlParameterペ―ジです。</h1>
        {/* <p>パラメータは{id}です</p> */}
        {/* <p>クエリパラメータは{query.get("name")}です</p> */}
      </div>
    )
  };
  export default UrlParameter;