import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import cartReducer from "./redux/cartReducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {cart:cartReducer}
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);