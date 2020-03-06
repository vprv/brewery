const express = require('express');
const config = require('config');

const app = express();
const PORT = config.get('port') || 5000;

app.set("view engine", "pug");
app.use(express.json({extended: true}));
app.use('/' , require('./routes/main.route'))

async function start() {
  try {
    app.listen(PORT, () => console.log(`port is ${PORT}`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
