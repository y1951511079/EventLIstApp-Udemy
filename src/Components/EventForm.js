/* eslint-disable */
import { useState, useEffect, useContext } from "react";
import { DELETE_ALL_EVENT, CREATE_EVENT, DELETE_ALL_OPERATION_LOGS, ADD_OPERATION_LOG } from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrent } from "../utils";
const EventForm = () => {
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const createEvent = (e) => {
        e.preventDefault()
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })
        dispatch({
            type: ADD_OPERATION_LOG,
            description: "イベントを作成しました。",
            operatedAt: timeCurrent()
        })
        setTitle("")
        setBody("")
    };

    const deleteAll = (e) => {
        e.preventDefault()
        const result = window.confirm(`全てのイベントを本当に削除しても良いですか？`)
        if (result) {
            dispatch({ type: DELETE_ALL_EVENT })
            dispatch({
                type: ADD_OPERATION_LOG,
                description:"全てのイベントを削除しました。",
                operatedAt: timeCurrent()
            })
        }
    }
    const deleteAllOperationLogs = (e) =>{
        e.preventDefault();
        const result = window.confirm("全ての操作ログを本当に削除しても良いですか？")
        if(result){
            dispatch({type:DELETE_ALL_OPERATION_LOGS})
        }
    }
    const unCreatable = title === "" || body === "";
    const unDeletable = state.events.length === 0;

    useEffect(() => {
        //ローカルストレージには文字列しか保存できないので、文字列に変換する。JSON.stringify()に指定したものが、ただの文字列になる。
        localStorage.setItem("appWithRedux", JSON.stringify(state))
        //第一引数にkey、第二引数にローカルストレージに保存したい文字列。keyによって文字列を呼び出しできる。localStorage.getItem("appWithRedux")
    }, [state])
    //stateが変更される度に実行
    return (
        <>
            <h2>イベント作成フォーム</h2>
            <p>タイトル</p>
            <input type="text" placeholder="タイトル" value={title} onChange={e => setTitle(e.target.value)} />
            <p>ボディ</p>
            <textarea placeholder="ボディ" value={body} onChange={e => setBody(e.target.value)} />
            <div>
                <button onClick={createEvent} disabled={unCreatable}>イベントを作成する</button>
                <button onClick={deleteAll} disabled={unDeletable}>全てのイベントを削除する</button>
                <button onClick={deleteAllOperationLogs} disabled={state.operationLogs.length===0} >全ての操作ログを削除する</button>
            </div>
        </>
    )
}

export default EventForm;