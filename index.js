const express = require("express");
const app = express();


app.use("/", (req, res) => res.sendStatus(200));

app.listen(3000, () => {
   console.log(`App listening on port ${3000}, env: ${process.env.NODE_ENV}`);
});


require('./request')
