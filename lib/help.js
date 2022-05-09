const help = () => {
	let text = `
COMMANDS: 

	help : Returns this help menu
	search : Asks you for a product name and upon entering will search product on multiple websites
	history : Returns a list of search history and asks for a value to re-search
		When selecting a number from the search history you can also pass the augument "AND <added value>" to append new search words to the existing search. As such...
		EX. 13 AND black and decker
	config : Displays config menu
	edit config : Allows you to edit the config file 
	exit : Exit program
	`;

	console.log(text)
}

module.exports = help;