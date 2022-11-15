import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import OperationLog from "./OperationLog";

const OperationLogs = () => {
    const { state } = useContext(AppContext);
    return (
        <>
            <h2>操作ログ一覧</h2>
            <table>
                <thead>
                    <tr>
                        <th >内容</th>
                        <th >日時</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            state.operationLogs.map((operationLog, index) => {
                                return <OperationLog key={index} operationLog={operationLog}/>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default OperationLogs;