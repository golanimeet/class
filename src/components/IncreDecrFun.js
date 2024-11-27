import React, { useState } from 'react';

const IncreDecrFun = () => {
    const [num, setNum] = useState(10);

    // const InputIncre = () => {
    //     setNum(num + 10);
    // }

    const InputDecre = () => {
        setNum(num - 10);
    }

    return (
        <div>
            <h1>Number is: {num}</h1>
            {/* 1 */}
            {/* <button onClick={InputIncre}>Increment</button> */}

             {/* 2 */}
            <button onClick={() => setNum(num + 10)}>increment</button>
            <button onClick={InputDecre}>Decrement</button>
        </div>
    )
}

export default IncreDecrFun;