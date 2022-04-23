import * as React from 'react';
import { useState } from 'react';

function Counter() {
    
    const [testString, setTestString] = useState<string>("init_string_value");
    const [count, setCount] = useState<number>(0);
    const increateCount = () => setCount(count +1);
    const decreaseCount = () => setCount(count-1);
    const randomString = () => setTestString(Math.random().toString());

    return (
        <div>
            <h1>My First React Type script Project</h1>
            <h2> {count} </h2>
            <h2> {testString} </h2>
            <div>
                <button onClick={increateCount}>+1</button>
                <button onClick={decreaseCount}>-1</button>
            </div>
            <div>
                <button onClick={randomString}>random</button>
            </div>
        </div>
    );
}


export default Counter;