/* eslint-disable */
import { entered, deleteda } from "../store/modules/enteredSlice";
// import enteredSlice from "../store/modules/enteredSlice";
import { add } from "../store/modules/todoReducer";
import { useSelector, useDispatch } from "react-redux"

// import store from "../store";
const Example = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.entered);
    const newTodos = useSelector(state => state.todo);
    const onChangeHandler = (e) => {
        const action = entered(e.target.value);
        dispatch(action);

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const submit = add(todos)
        dispatch(submit)
        const deleted = deleteda()
        //変数名とActionCreaterは同じ名前はダメ
        dispatch(deleted)

    }
    const arrayTodos = [...newTodos];
    //mapメソッドでエラーが出たため新しい配列に入れ直した。
    return (
        <>
            <h2>Reminder</h2>


            {arrayTodos.map(prev => {
                return (
                    <p key={prev.id}>{prev.content}</p>
                )
            }
            )}


            <form onSubmit={submitHandler}>
                <input type="text" value={todos} onChange={onChangeHandler} />
                <button >追加</button>
            </form>


        </>
    )

}

export default Example;
