const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/interest', function(req, res) {
    let amount = req.query.amount
    let rate = req.query.rate
    let time = req.query.time

    amount = parseInt(amount);
    rate = parseInt(rate);
    time = parseInt(time);


    let interest = Math.floor(amount * rate/100 * time);
    let total = amount + interest;

    res.send({
        interest: interest,
        total: total
    })
})

app.listen(3000);