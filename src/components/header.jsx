/**@jsxImportSource @emotion/core jsx */
import { css } from "@emotion/core";
import { style } from "../utils/styles";

export function Header() {
    return (
        <header>
            <h1
                css={css`
                    text-transform: uppercase;
                    color: ${style.color.neutral.white};
                    font-size: 2rem;
                    padding: 0 2rem;
                    letter-spacing: 0.4rem;
                `}
            >
                we're launching soon
            </h1>
        </header>
    );
}
