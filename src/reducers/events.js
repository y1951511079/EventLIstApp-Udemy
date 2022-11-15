//  /* eslint-disable */
import {DELETE_ALL_EVENT,CREATE_EVENT,DELETE_EVENT} from "../actions";

const events = (state = [], action) => {
    //actionはtype, title, bodyの情報が格納されたオブジェクト
    switch (action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = state.length;
            const id = length === 0 ? 1 : state[length - 1].id + 1;
            console.log(state)
            //この段階のstateにはイベント作成を押す前のイベント一覧のオブジェクトが格納された配列がある。[{id:1...},{id:2...}]
            return [...state, { id, ...event }]
        //既存のstateの配列のなかに新しいオブジェクトが追加され、新しいステートに更新される。[{id:1...},{id:2...},{id:3...}]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)
        case DELETE_ALL_EVENT:
            return []
        default:
            return state
    }
}

export default events
