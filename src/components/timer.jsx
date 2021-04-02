/**@jsxImportSource @emotion/core jsx */
import { css } from "@emotion/core";
import { style } from "../utils/styles";
import { convertTime } from "../utils/convertTime";
import { useState, useEffect } from "react";
import "./timer.scss";

const TimeFragment = ({ time, unit }) => {
    return (
        // <div
        //     css={css`
        //         margin: 0 1rem;
        //         width: 10rem;
        //         height: 5rem;

        //         p {
        //             font-size: 4.8rem;

        //             &:first-child {
        //                 background-color: red;
        //                 padding: 1rem 1.5rem;
        //                 border-radius: 5px;
        //                 background: linear-gradient(
        //                     to bottom,
        //                     ${style.color.neutral.darkDesaturatedBlue} 50%,
        //                     ${style.color.neutral.darkDesaturatedBlue} 50%
        //                 );
        //                 color: ${style.color.primary.softRed};

        //                 margin-bottom: 1rem;
        //             }
        //             &:last-child {
        //                 text-transform: uppercase;
        //                 font-size: 0.6rem;
        //                 color: ${style.color.primary.grayishBlue};
        //                 letter-spacing: 0.4rem;
        //             }
        //         }
        //     `}
        // >
        //     <p>{time}</p>
        //     <p>{unit}</p>
        // </div>

        <div id="countdown-clock" class="countdown-clock">
            {/* <!-- Days --> */}
            <div class="countdown days">
                <div class="countdown-card">
                    <div id="card-top" class="card-top">
                        <span id="days-number">04</span>
                    </div>
                    <div id="card-bottom" class="card-bottom">
                        <span id="days-number">04</span>
                    </div>
                </div>
                <div class="flip-card">
                    <div id="flip-card-top-d" class="flip-card-top">
                        <span id="flip-days-number">04</span>
                    </div>
                    <div id="flip-card-bottom-d" class="flip-card-bottom">
                        <span id="flip-days-number">04</span>
                    </div>
                </div>
                <p>days</p>
            </div>
            {/* <!-- Hours --> */}
            <div class="countdown hours">
                <div class="countdown-card">
                    <div id="card-top" class="card-top">
                        <span id="hours-number">23</span>
                    </div>
                    <div id="card-bottom" class="card-bottom">
                        <span id="hours-number">23</span>
                    </div>
                </div>
                <div class="flip-card">
                    <div id="flip-card-top-h" class="flip-card-top">
                        <span id="flip-hours-number">23</span>
                    </div>
                    <div id="flip-card-bottom-h" class="flip-card-bottom">
                        <span id="flip-hours-number">23</span>
                    </div>
                </div>
                <p>hours</p>
            </div>
            {/* <!-- Minutes --> */}
            <div class="countdown minutes">
                <div class="countdown-card">
                    <div id="card-top" class="card-top">
                        <span id="minutes-number">39</span>
                    </div>
                    <div id="card-bottom" class="card-bottom">
                        <span id="minutes-number">39</span>
                    </div>
                </div>
                <div class="flip-card">
                    <div id="flip-card-top-m" class="flip-card-top">
                        <span id="flip-minutes-number">39</span>
                    </div>
                    <div id="flip-card-bottom-m" class="flip-card-bottom">
                        <span id="flip-minutes-number">39</span>
                    </div>
                </div>
                <p>minutes</p>
            </div>
            {/* <!-- Seconds --> */}
            <div class="countdown seconds">
                <div class="countdown-card">
                    <div id="card-top" class="card-top">
                        <span id="seconds-number">10</span>
                    </div>
                    <div id="card-bottom" class="card-bottom">
                        <span id="seconds-number">10</span>
                    </div>
                </div>
                <div class="flip-card">
                    <div id="flip-card-top-s" class="flip-card-top">
                        <span id="flip-seconds-number">10</span>
                    </div>
                    <div id="flip-card-bottom-s" class="flip-card-bottom">
                        <span id="flip-seconds-number">10</span>
                    </div>
                </div>
                <p>Seconds</p>
            </div>
        </div>
    );
};

export function Timer() {
    const date = new Date("16 Apr 2021 00:00:00 UTC");
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
            {/* <TimeFragment
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
            /> */}

            <TimeFragment />
        </section>
    );
}
