import React from 'react';
import ReactDOM from 'react-dom';

let n = 0;
const App = () => {
    return (
        React.createElement("div", null, [n,
            React.createElement("button", {
                onClick: () => {
                    n += 1;
                    console.log(n);
                    ReactDOM.render(App(), document.querySelector("#root"));
                }
            }, "+1")
        ])
    )
}

export default App