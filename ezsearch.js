const os = require('os')
const hd = os.homedir();
const inquirer = require(hd + '\\AppData\\Roaming\\npm\\node_modules\\inquirer');
const puppeteer = require(hd + '\\AppData\\Roaming\\npm\\node_modules\\puppeteer');
const figlet = require(hd + '\\AppData\\Roaming\\npm\\node_modules\\figlet');
const veroChecker = require('./lib/veroCheck.js');
const help = require('./lib/help.js');
const startServer = require('./lib/serverStart.js');
const fs = require('fs');

const sleep = ms => {return new Promise(res => {setTimeout(res, ms)})}
const mainFunc = async () => {
	figlet('\\---ezSearch---/', function(err, data) {
	    if (err) {
	        console.log('Something went wrong...');
	        console.dir(err);
	        return;
	    }
	    console.log(data);
	    console.log('Author: Conner Allen');
	    console.log('Version: 0.0.1');
	    console.log('Welcome to the ezSearch CLI. Run the command "help" if you have any questions about use.');
	    console.log('If you would prefer a GUI, then you can run "gui" to begin an instance in your browser. Otherwise enjoy!\n');

	});

	await sleep(3000);

	//Inquirer questions
	const q = {
		name: 'main',
		type: 'input',
		message: 'ezsearch_>>'
	}
	const q2 = {
		name: 'main',
		type: 'input',
		message: 'Select a product by number: '
	}
	const q3 = {
		name: 'main',
		type: 'input',
		message: 'Product to search: '
	}
	const q4 = {
		name: 'main',
		type: 'input',
		message: 'ezedit_>> '
	}

	//Accepted commands 
	const acceptedCommands = ['search', 'help', 'history', 'config', 'edit config', 'gui','exit'];

	//Check config file
	let config = JSON.parse(fs.readFileSync('./lib/config.txt').toString());

	const run = (product) => {
		inquirer.prompt([q])
		.then(async res => {
			//Check for valid command
			if(!acceptedCommands.includes(res.main)){
				console.log(`!!!!!!! WARNING !!!!!!! - ERROR : Command not recognized. Run help to see available commands`);
				run();
				return;
			}

			//History search
			if(res.main == 'history'){
				//Add search to history
				let existingText = fs.readFileSync('./lib/history.txt').toString();

				let arr = existingText.split(':')

				arr.forEach((item, i) => {
					console.log(`[${i}]   :::::::::   ${item}`)
				})

				inquirer.prompt([q2])
				.then(async res => {
					//Check for additional argument
					let x;
					if(res.main.includes('AND')){
						x = `${arr[res.main]} ${res.main.split('AND')[1]}` 
					}else{
						x = arr[res.main];
					}
					//Make puppeteer search
					const browser = await puppeteer.launch({headless: false,  args: ['--start-maximized']});
					
					config.urls.forEach(async (item, i) => {
						if(config.websites[Object.keys(config.websites)[i]] == "true"){
							let url = item.replace('${res.main}', res.main);
							const page = await browser.newPage();
							await page.setViewport({width:0, height:0});
							await page.setViewport({ width: 1920, height: 1080});
							await sleep(1000)
							await page.goto(url);
						}
					})

					await browser.on('disconnected', () => {
						console.log('Disconnected...')
						run();
					})

				})
				.catch(err => {console.log(err)})
			}
			if(res.main == 'search'){
				inquirer.prompt([q3])
				.then(async res => {
					let h = fs.readFileSync('./lib/history.txt').toString();
					let newText = `${h} : ${res.main}`;
					fs.writeFileSync('./lib/history.txt', newText);
					let x = res.main;

					//Vero checker
					veroChecker(res.main);

					//Make puppeteer search
					const browser = await puppeteer.launch({headless: false,  args: ['--start-maximized']});

					config.urls.forEach(async (item, i) => {
						if(config.websites[Object.keys(config.websites)[i]] == "true"){
							let url = item.replace('${res.main}', res.main);
							const page6 = await browser.newPage();
							await page6.setViewport({width:0, height:0});
							await sleep(1000)
							await page6.goto(url);
						}
					})

					await browser.on('disconnected', () => {
						console.log('Disconnected...');
						run();
					})

				})
				.catch(err => {console.log(err)})
			}

			//Bring up help menu
			if(res.main == 'help'){
				help();
				run();
			}

			//Bring up config menu
			if(res.main == 'config'){
				let d = JSON.parse(fs.readFileSync('./lib/config.txt').toString());
				console.log(d)
				run();
			}
				
			//Edit config file
			if(res.main == 'edit config'){
				inquirer.prompt([q4])
				.then(res => {
					let site = res.main.split('SET ')[1].split(' TO ')[0];
					config.websites[site] = res.main.split('SET ')[1].split(' TO ')[1];
					fs.writeFileSync('./lib/config.txt', JSON.stringify(config));
					console.log('Changes saved!')
					run();
				})
				.catch(err => console.log(err));
			}

			if(res.main =='gui'){
				console.log('Loading ezsearch GUI...');
				startServer();
			}

			//Exit 
			if(res.main == 'exit'){
				console.log('Bye!')
			}
			
			
		})
		.catch(err => console.log(err))
			
	}
	run()
}

mainFunc();

