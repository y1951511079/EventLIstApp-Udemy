import { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";


const Events = () => {
    const {state} = useContext(AppContext);
    return (
        <>
            <h2>イベント一覧</h2>
            <table>
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >タイトル</th>
                        <th >ボディ</th>
                    </tr>
                </thead>
                <tbody>
                    {state.events.map((event, index) => (<Event key={index} event={event} />))}
                {/* stateはオブジェクトなのでeventsを付ける */}
                </tbody>
            </table>
            <h2>操作ログ一覧</h2>
            <table>
                <thead>
                    <tr>
                        <th >内容</th>
                        <th >日付</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Events;