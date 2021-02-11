import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**@jsxImportSource */
import { Global, css } from "@emotion/core";

ReactDOM.render(
    <React.StrictMode>
        <Global
            css={css`
                html {
                    box-sizing: border-box;
                }
                *,
                *::after,
                *::before {
                    box-sizing: inherit;
                    padding: 0;
                    margin: 0;
                }

                body {
                    width: 100vw;
                    height: 100vh;
                }
            `}
        />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
