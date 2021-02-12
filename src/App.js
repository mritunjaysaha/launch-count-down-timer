/**@jsxImportSource @emotion/core jsx */

import { css } from "@emotion/core";
import { Header } from "./components/header";
import { Timer } from "./components/timer";
import { SocialTabs } from "./components/socialTabs";

function App() {
    return (
        <div
            css={css`
                height: 100vh;
                width: 100vw;

                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                padding: 12rem 0 4rem;
            `}
        >
            <Header />
            <Timer />
            <SocialTabs />
        </div>
    );
}

export default App;
