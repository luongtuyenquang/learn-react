import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Form from './Form';
// import { Provider } from 'react-redux'
// import store from './store/index'
import UseContext from './Hooks/UseContext'
import Provider from './store/Provider'

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}>
            <App />
        </Provider> */}
        {/* <Form /> */}
        <Provider>
            <UseContext />
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
