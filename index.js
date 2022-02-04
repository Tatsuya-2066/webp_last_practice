import express from "express";
import cors from "cors";
import * as data from "./sample-data.js";

const app = express();
app.use(cors());
const today = new Date();

/*app.get("/calendar", async(req, res) => {

    const comment = data.test;
    res.json(comment)
})*/

app.get("/calendar", async(req, res) => {
    //const month = +req.query.month || today.getMonth();
    const calendar = data.calendar;
    res.json({
        rows: calendar
    });
});

app.get("/calendar/schedule", async(req, res) => {
    const month = +req.query.month || today.getMonth();
    const day = +req.query.day || today.getDate() - 1;
    const schedule_date = data.calendar[month][day];
    const schedule = data.schedules.find(
        (schedule) => schedule.date === schedule_date
    );
    if(!schedule) {
        return console.log("no data");
    }
    res.json({
        rows: schedule
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});