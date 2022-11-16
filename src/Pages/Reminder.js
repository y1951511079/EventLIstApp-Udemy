import Counter from "../Components/Counter";
import { CounterProvider } from "../Context/Counter";

const Reminder = () => {
    return (
        <>
            <CounterProvider>
                <Counter />
            </CounterProvider>
        </>
    )

}

export default Reminder;