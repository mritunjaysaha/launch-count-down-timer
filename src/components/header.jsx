/**@jsxImportSource @emotion/core jsx */
import { css } from "@emotion/core";

export function Header() {
    return (
        <header>
            <h1
                css={css`
                    text-transform: uppercase;
                `}
            >
                we're launching soon
            </h1>
        </header>
    );
}
