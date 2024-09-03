import express from "express";

import { BACKEND_URL } from "@repo/common/config"
import { VALUE } from "@repo/common/config"

const app = express();


console.log(BACKEND_URL);
console.log(VALUE);

app.get("/", (req, res) => {
    res.json({
        message: "hi the"
    })
})

app.listen(3000)