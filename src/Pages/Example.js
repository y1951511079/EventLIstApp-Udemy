import { useState } from "react";

const Reminder = () => {

    // const initialState = [{
    //     id: 0,
    //     content: ""
    // }]
    //stateは配列！オブジェクトに設定すると([]を付けないと)後にmapメソッドを使えない。
    const [todos, setTodos] = useState([]);
    //todoリストを保持
    const [enteredTodo, setEnteredTodo] = useState("");
    //Formの入力欄の状態を監視するstate。enteredTodoにはフォームに入力し文字が入ってくる。

    const addList = (e) => {

        e.preventDefault();
        //formのonClickのデフォルト動作である再リロードを防ぐ。
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo
        }
        //enteredTodoの入力を元に新しいオブジェクトを生成し、これをtodoリストのstateに反映させる。
        setTodos([...todos, newTodo])
        setEnteredTodo("")
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    }

    return (
        <>
            <h1>Reminder</h1>
            <div>
                <h2>List.js</h2>
                {todos.map(todo => {
                    return (
                        //todoには新規で登録されたオブジェクト{content:"××",id:○○}
                        <div key={todo.id}>
                            <button onClick={() => deleteTodo(todo.id)}>完了</button>
                            <span>{todo.content}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>Form.js</h2>
                <form onSubmit={addList}>
                    <input type="text" value={enteredTodo} onChange={(e) => setEnteredTodo(e.target.value)} />
                    <button  >追加</button>
                </form>
            </div>
        </>
    )

}

export default Reminder;
