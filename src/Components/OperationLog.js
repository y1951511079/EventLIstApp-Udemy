
const OperationLog = ({operationLog}) =>{
    return(
        <>
        <tr>
            <td>{operationLog.description}</td>
            <td>{operationLog.operatedAt}</td>
        </tr>
        <tr></tr>
        </>
    )
}

export default OperationLog;