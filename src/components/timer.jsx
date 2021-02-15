/**@jsxImportSource @emotion/core jsx */
import { css } from "@emotion/core";
import { style } from "../utils/styles";
import { convertTime } from "../utils/convertTime";
import { useState, useEffect } from "react";

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
                            to bottom,
                            ${style.color.neutral.darkDesaturatedBlue} 50%,
                            ${style.color.neutral.darkDesaturatedBlue} 50%
                        );
                        color: ${style.color.primary.softRed};

                        margin-bottom: 1rem;
                        /* mask-image: radial-gradient(
                            circle farthest-side at left,
                            transparent 50%,
                            white 50%
                        ); */
                        /* check remarks before using */
                    }
                    &:last-child {
                        text-transform: uppercase;
                        font-size: 0.6rem;
                        color: ${style.color.primary.grayishBlue};
                        letter-spacing: 0.4rem;
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
    const date = new Date("16 Feb 2021 00:00:00 UTC");
    console.log(date.toUTCString());
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);

    console.log(convertTime(date));
    useEffect(() => {
        let interval = setInterval(() => {
            const { days, hours, minutes, seconds } = convertTime(date);
            console.log({ days, hours, minutes, seconds });
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [date]);

    return (
        <section
            css={css`
                position: relative;
                margin-top: -24rem;
                display: flex;
                color: ${style.color.neutral.white};
            `}
        >
            <TimeFragment
                time={
                    days || days === 0 ? (days < 10 ? "0" + days : days) : "08"
                }
                unit="days"
            />
            <TimeFragment
                time={
                    hours || hours === 0
                        ? hours < 10
                            ? "0" + hours
                            : hours
                        : "23"
                }
                unit="hours"
            />
            <TimeFragment
                time={
                    minutes || hours === 0
                        ? minutes < 10
                            ? "0" + minutes
                            : minutes
                        : "55"
                }
                unit="minutes"
            />
            <TimeFragment
                time={
                    seconds || seconds === 0
                        ? seconds < 10
                            ? "0" + seconds
                            : seconds
                        : "41"
                }
                unit="seconds"
            />
        </section>
    );
}
