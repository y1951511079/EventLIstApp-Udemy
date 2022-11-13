import {  useNavigate} from "react-router-dom";

const PageDetail1 = () => {
    const navigate = useNavigate();
    const onClickBack = () => navigate(-1);
    return(
      <div>
        <h1>PageDetail1ペ―ジです。</h1>
        <button onClick={onClickBack}>戻る</button>
      </div>
    )
  };
  export default PageDetail1;