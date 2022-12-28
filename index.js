const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8001;

const app = express();

//Enable Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/openai', require('./routes/openaiRoutes'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})


