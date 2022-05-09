
//Pretty much the same as "main.js" expect sturctered a bit differently to work with the browser GUI


const os = require('os')
const hd = os.homedir();
const puppeteer = require(hd + '\\AppData\\Roaming\\npm\\node_modules\\puppeteer');
const veroChecker = require('./lib/veroCheck_gui.js');
const help = require('./lib/help.js');
const fs = require('fs');

const sleep = ms => {return new Promise(res => {setTimeout(res, ms)})};
//Check config file
let config = JSON.parse(fs.readFileSync('./lib/config.txt').toString());
const mainFunc = async (arg) => {


	//Accepted commands 
	const acceptedCommands = ['search', 'help', 'history', 'config', 'edit config', 'exit'];


	const run = async (product) => {

		let command = arg.split(' : ')[0];
		let data = arg.split(' : ')[1];

		if(command == 'SEARCH'){

			let h = fs.readFileSync('./lib/history.txt').toString();
			let newText = `${h} : ${data}`;
			fs.writeFileSync('./lib/history.txt', newText);
			let x = data;

			//Vero checker
			veroChecker(data);

			//Make puppeteer search
			const browser = await puppeteer.launch({headless: false,  args: ['--start-maximized']});
			
			config.urls.forEach(async (item, i) => {
				if(config.websites[Object.keys(config.websites)[i]] == "true"){
					let url = item.replace('${res.main}', data);
					const page6 = await browser.newPage();
					await page6.setViewport({width:0, height:0});
					await sleep(1000)
					await page6.goto(url);
				}
			})

		}
	
	}
	run()
}


module.exports = mainFunc;