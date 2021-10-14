import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Form from './Form';
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        {/* <Form /> */}
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
