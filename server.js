const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require("cors");
const corsOptions ={origin:'*', credentials:true, optionSuccessStatus:200}


// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors(corsOptions))
// Routes
openConnection();

function openConnection() {
    app.listen(port, () => { console.log(`App listening on port ${port}`)})
    try {
        listApi(app, config)
    } 
    catch (e) {
        console.error(e);
    }
}

function listApi(app, config) {
    product.createPath(app, config);
}

module.exports = {}
