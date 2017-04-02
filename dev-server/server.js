const express = require('express');
const path = require('path');

const app = express();

app.use('/bundle.js', express.static(path.resolve('dist/bundle.js')));
app.use('/bundle.css', express.static(path.resolve('dist/bundle.css')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dev-server/templates/index.html'));
});



app.get('/api', (req, res) => {

    var data =  [
        {"id" : "1", "hexColor" : "#c488f3", "name" : "2 Day Shipping"},
        {"id" : "2", "hexColor" : "#25a696", "name" : "3-5 Day Shipping"},
        {"id" : "3", "hexColor" : "#da3b11", "name" : "Address Check"}
    ];
    
    return res.json({
        data
    })
});

var port = 3000;

app.listen(port, (error) => {
    if (error) throw error;
    console.log('Express server is listening on port', port);
})