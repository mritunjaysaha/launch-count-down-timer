/**@jsxImportSource @emotion/core jsx */
import { css } from "@emotion/core";

export function Timer() {
    return (
        <section
            css={css`
                padding: 1em;
            `}
        >
            <div>
                <p>08</p>
                <p>days</p>
            </div>
            <div>
                <p>23</p>
                <p>hours</p>
            </div>
            <div>
                <p>55</p>
                <p>minutes</p>
            </div>
            <div>
                <p>41</p>
                <p>seconds</p>
            </div>
        </section>
    );
}
