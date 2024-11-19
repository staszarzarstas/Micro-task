import React from 'react';
import './App.css';

function App() {
    const [a, setA] = React.useState(0);

    const onClickHandler = () => {
        setA(a + 1);
    }

    const resetMyCounter = () => {
        setA(0);
    }

    return (
        <div>
            <div className="App">
                <div className="screen_result">
                    <h1 className={a === 5 ? 'red' : ''}>{a}</h1>
                </div>
                <div className="btn_container">
                    <button onClick={onClickHandler} disabled={a === 5}>inc</button>
                    <button onClick={resetMyCounter} disabled={a === 0}>reset</button>

                </div>
            </div>
        </div>
    );
}

export default App;
