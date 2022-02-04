import { Link } from "react-router-dom";

export function RootPage() {
    return (
        <>
            <h1 className="title is-1 has-text-centered">Please login</h1>
            <div className="has-text-centered">
                <Link className="button is-warning" to="/calendar">
                    log in
                </Link>
            </div>
        </>
    )
}