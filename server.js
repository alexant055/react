const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("app listening port is " + PORT)
});

app.get('*', (requst, response) => {
    response.sendFile(__dirname + '/build/index.html')
})