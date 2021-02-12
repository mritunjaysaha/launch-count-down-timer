/**@jsxImportSource @emotion/core jsx */
import { css } from "@emotion/core";
import { style } from "../utils/styles";

const TimeFragment = ({ time, unit }) => {
    return (
        <div
            css={css`
                margin: 0 1rem;

                p {
                    font-size: 3rem;

                    &:first-child {
                        background-color: red;
                        padding: 1rem 1.5rem;
                        border-radius: 5px;
                        background: linear-gradient(
                            ${style.color.neutral.darkDesaturatedBlue},
                            ${style.color.neutral.darkDesaturatedBlue} 50%,
                            ${style.color.neutral.black},
                            ${style.color.neutral.black}75%
                        );
                    }
                    &:last-child {
                        text-transform: uppercase;
                        font-size: 1rem;
                    }
                }
            `}
        >
            <p>{time}</p>
            <p>{unit}</p>
        </div>
    );
};

export function Timer() {
    return (
        <section
            css={css`
                position: relative;
                margin-top: -24rem;
                display: flex;
                color: ${style.color.neutral.white};
            `}
        >
            <TimeFragment time="08" unit="days" />
            <TimeFragment time="23" unit="hours" />
            <TimeFragment time="55" unit="minutes" />
            <TimeFragment time="41" unit="seconds" />
        </section>
    );
}
