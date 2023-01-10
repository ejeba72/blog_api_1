const express = require('express');
const { config } = require('dotenv');
const { healthRouter } = require('./routes/healthRoute');
const { devRouter } = require('./routes/devRoute');

// DOTENV CONFIG
config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/', healthRouter);
app.use('/dev', devRouter);

app.listen(PORT, () => {
  console.log(`Server is attentively listening for requests @ port ${PORT}.`);
});
