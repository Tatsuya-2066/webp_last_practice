import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading.js";
import { getSchedule } from "../api.js";

export function SchedulePage() {
    const [schedule, setSchedule] = useState(null);
    const params = (new URL(document.location)).searchParams;
    const month = +params.get("month");
    const day = +params.get("day");
    const today = new Date();
    const today_month = today.getMonth();
    const today_day = today.getDate();

    const scheduleBoxStyle = {
        width: "70%",
        height: "85vh",
        margin: "auto",
        borderRadius: "20px"
    }

    useEffect(() => {
        getSchedule({
            month: month,
            day: day
        }).then((data) => {
            setSchedule(data);
        })
    })

    return (
        <div className="has-background-white" style={scheduleBoxStyle}>
            <section className=" title has-text-centered" style={{fontSize: "50px"}}>
            </section>
            <section className="mx-3" style={{height: "75%"}}>
                <div className="columns">
                    <div className="column auto">
                        <textarea className="textarea has-fixed-size" style={{height: "330px"}} placeholder="Comment"></textarea>
                    </div>
                    <div className="column is-one-quarter">
                        <label className="checkbox">
                            <input type="checkbox"/>
                            important
                        </label>
                    </div>
                </div>
            </section>
            <section className="my-3">
                <div className="content has-text-centered">
                    <Link to="/calendar">
                        <button className="button">overwrite</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}