import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppWidthRedux from "./AppWidthRedux";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <AppWidthRedux/>
    </Provider>
);

reportWebVitals();
