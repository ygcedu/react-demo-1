import React from 'react';
import ReactDOM from 'react-dom';

let n = 0;
const App = () => {
    return (
        <div>
            {n}
            <button onClick={
                () => {
                    n += 1;
                    console.log(n);
                    ReactDOM.render(<App/>, document.querySelector('#root'));
                }
            }>
                +1
            </button>
        </div>

    )
}

export default App