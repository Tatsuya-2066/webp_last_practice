import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RootPage } from "./pages/Root.js";
import { CalendarPage } from "./pages/Calendar.js";
import { SchedulePage } from "./pages/Schedule.js";


function Header() {
    return (
        <section className="hero is-warning">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Calendar
                    </h1>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <p className="has-text-centered">
                </p>
            </div>
        </footer>
    );
}

export function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <section className="section has-background-warning-light">
                        <div className="container">
                            <Header />
                            <RootPage />
                            <Footer />
                        </div>
                    </section>
                </Route>
                <Route path="/calendar" exact>
                    <CalendarPage />
                </Route>
                <Route path="/calendar/schedule" exact>
                    <section className="section has-background-link-light" style={{height: "100vh"}}>
                        <div className="container">
                            <SchedulePage />
                        </div>
                    </section>
                </Route>
            </Switch>
        </Router>
    )
}