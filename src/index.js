import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Form from './Form';
// import { Provider } from 'react-redux'
// import store from './store/index'
import UseReducer from './Hooks/UseReducer'

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}>
            <App />
        </Provider> */}
        {/* <Form /> */}
        <UseReducer />
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
