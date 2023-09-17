import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalstorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }
    const getFromLocalstorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue');
            setValue(valueAsString && JSON.parse(valueAsString));
    }
    const clearLocalstorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeLocalstorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={ incHandler }>INC</button>
            <button onClick={ setToLocalstorageHandler }>setToLocalstorage</button>
            <button onClick={ getFromLocalstorageHandler }>getFromLocalstorage</button>
            <button onClick={ clearLocalstorageHandler }>clearLocalstorage</button>
            <button onClick={ removeLocalstorageHandler }>removeLocalstorage</button>
        </div>
    );
}

export default App;
