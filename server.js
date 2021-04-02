const express = require("express");
const cors = require('cors');
const app = express();


require('./server/config/mongoose.config');

// require cors,express,json
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/incident.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
// took out all the default comments