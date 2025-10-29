import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); // Hook to manage the count state


    function handleClick1() {
        setCount(count + 1); // Increment count by 1
    }

    function handleClick2() {
        setCount(count - 1); // Decrement count by 1
    }

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={handleClick1}>Increment +</button>
            <button onClick={handleClick2}>Decrement -</button>
            <div>{count}</div>
            <button onClick={() => setCount(count +1)}>Increment +</button>
            <button onClick={function() {setCount(count -1)}}>Decrement -</button>
        </div>
    )
}

// export default Counter;