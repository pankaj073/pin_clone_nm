const express = require('express');

const app = express();

app.get('/api/pin', (req, res) => {
    const pins = {
        Status: 1,
        Data: [{
            Id: 1,
            Text: "This is the first post",
            Url: "#"
        }, {
            Id: 2,
            Text: "This is the second post",
            Url: "#"
        }]
    };
    res.statusCode = 200;
    res.send(pins);
})

app.listen(8000, function() {
    console.log("Server Started...");
});
