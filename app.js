const express = require('express');

const app = express();


app.get('/', (request, response) => {
    response.status(200).json({
        msg:'Hello Backend AWS'
    })
})

app.listen(3000);