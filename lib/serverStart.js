const os = require('os')
const hd = os.homedir();
const express = require(hd + '\\AppData\\Roaming\\npm\\node_modules\\express');
const bodyParser = require(hd + '\\AppData\\Roaming\\npm\\node_modules\\body-parser');
const mainFunc = require('../ezsearch_gui.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})

app.get('/config', (req, res) => {
  res.sendFile(__dirname + '/config.txt')
})

app.get('/history', (req, res) => {
  res.sendFile(__dirname + '/history.txt')
})

app.get('/veroList', (req, res) => {
  res.sendFile(__dirname + '/veroList.txt')
})

app.get('/juice.ttf', (req, res) => {
  res.sendFile(__dirname + '/html/Juice Avocado.ttf')
})


//Handlers
app.post('/search', (req, res) => {
	let p = req.body.data;
	console.log(p)
	mainFunc(p);
})



const startSever = () => {
	app.listen(port, () => {
	  console.log(`\nExpress server started!\nYou can now view the ezsearch GUI via "http://localhost:3000" in your web browser`)
	})
}

module.exports = startSever;






