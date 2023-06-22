const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const yahooFinance = require('yahoo-finance');
const date = require('date-and-time');
const util = require("util");
require('dotenv').config();
const app = express()
const port = 8000

const corsOpts = {
    origin: '*'
};

app.use(cors(corsOpts));
app.use(bodyParser.json())

app.post('/', async (req, res) => {

    let data = {};
    let shareTicker = req.body.data.shareTicker;
    const now = new Date().toJSON();

    let dateString = now.slice(4, 10);
    let yearString = now.slice(0, 4);
    let yearInt = parseInt(yearString);

    let startDate = (yearInt - 1).toString() + dateString;
    let endDate = yearString + dateString;

    console.log("Current Request Share Ticker: " + shareTicker);

    await yahooFinance.historical({
        symbol: shareTicker,
        from: startDate,
        to: endDate,
        period: 'd'
    }, function (err, quotes) {
        if (err) {
            throw err;
        }
        console.log(util.format(
            '=== %s (%d) ===',
            'AAPL',
            quotes.length
        ).cyan);
        if (quotes[0]) {
            data = quotes.reverse();
        } else {
            console.log('N/A');
        }
    });

    res.json({result: data});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})