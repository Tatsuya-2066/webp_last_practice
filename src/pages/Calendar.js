import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCalendars } from "../api.js";
import { Loading } from "../components/Loading.js";
import nextImageUrl from "../images/next.png";
import previousImageUrl from "../images/previous.png";

export function CalendarPage() {
    const today = new Date();
    const [calendars, setCalendars] = useState(null);
    const [month, setMonth] = useState(null);

    useEffect(() => {
        getCalendars().then((data) => {
            setCalendars(data);
        })
        setMonth(today.getMonth());
    }, []);

    useEffect(() => {
        if(month < 0) {
            month = 11;
        }
        if(month > 11) {
            month = 0;
        }
    }, [month])   

    const handleMonthMinus = () => {
        if(month == 0) {
            alert("No data for last year.");
        } else {
            setMonth(month - 1);
        }
    }

    const handleMonthPlus = () => {
        if(month == 11) {
            alert("No data for next year.");
        } else {
            setMonth(month + 1);
        }
    }

    return (
        <div className="columns">
            <div className="content column has-background-link-light is-one-quarter" style={{height: "100vh", width: "20vw"}} onClick={handleMonthMinus}>
                <div className="has-text-centered" style={{margin: "65% auto"}}>
                    <img src={previousImageUrl} alt="先月"></img>
                </div>
            </div>
            <div className="content is-half" style={{height: "100vh", width: "60vw", backgroundColor: "pink"}}>
                <section className="section title block is-centered has-text-centered has-background-white py-3 mt-6 mx-3" style={{fontSize: "70px", borderRadius: "20px"}}>
                    2022/{month + 1}
                </section>
                <section className="section block is-centered has-text-centered has-background-white mx-3" style={{borderRadius: "10px"}}>
                    <div className="columns is-variable is-7 is-centered is-multiline">
                        {calendars == null || month == null ? (
                            <Loading />
                        ) : (
                            calendars["rows"][month].map((date, index) => {
                                return (<Link key={index} to="/calendar/schedule" className="column has-background-link-light m-2" style={{borderRadius: "10px"}}>{index + 1}</Link>);
                            })
                        )}
                    </div>
                </section>
            </div>
            <div className="content column has-background-link-light is-one-quarter" style={{height: "100vh", width: "20vw"}} onClick={handleMonthPlus}>
                <div className="has-text-centered" style={{margin: "65% auto"}}>
                    <img src={nextImageUrl} alt="来月"></img>
                </div>
            </div>
        </div>
    )
}