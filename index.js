import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.js";
import ShopContextProvider from "./src/Context/ShopContext.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
require('dotenv').config()


root.render(
    <ShopContextProvider>
        <App/>
    </ShopContextProvider>
);