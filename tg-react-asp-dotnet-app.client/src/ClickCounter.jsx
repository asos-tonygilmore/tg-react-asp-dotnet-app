import React, { useState, useEffect } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/ClickCounter')
            .then((response) => response.json())
            .then((data) => setCount(data.count));
    }, []);

    const increment = () => {
        fetch('/ClickCounter', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => setCount(data.count));
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Click Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Click Me!
            </button>
        </div>
    );
};

export default ClickCounter;
