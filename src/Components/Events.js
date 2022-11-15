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
                </tbody>
            </table>
            
        </>
    )
}

export default Events;