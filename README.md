# ezSearch
A tool for retrieving product information from multiple platforms at once. Search up to 10 platforms with one click

Current Version: 0.0.1 <br>
Author: Conner Allen <br>
Last Published: 5/8/2022 <br>

# Requirements
The only requirement for this program is <a href="https://nodejs.org/en/">NodeJS</a>

# Installation 
Installation can be done by cloning or downloading this repository

`git clone https://github.com/ConnerAllen-Dev/ezSearch.git`

then

`npm install --save -g puppeteer express body-parser figlet inquirer`


# Launch (CLI)
![alt text](https://github.com/ConnerAllen-Dev/ezSearch/blob/main/lib/githubImgs/screenshot1.png?raw=true)

ezSearch has a CLI and GUI available for users to interact with. To use the ezSearch CLI simply `cd` into the folder you cloned or downloaded the repository to then run `node ezSearch`.

# Launch (GUI)
![alt text](https://github.com/ConnerAllen-Dev/ezSearch/blob/main/lib/githubImgs/screenshot2.png?raw=true)

To launch the GUI, simple follow the CLI launch instructions above and once the application has loaded, run `gui`. This will start a express server on "localhost:3000". To view the GUI, simply open your web browser and navigate to "localhost:3000" or "127.0.0.1:3000"

# Use 
Because the GUI is rather self explanitory to navigate, the use section will only apply to the CLI version.

**Commands:**

**"gui"** - Start a express server running on "localhost:3000" that displays ezSearch GUI.

**"search"** - Running search will prompt you for a product name. Simple type in your desired product name and ezSearch will open all windows set to true in the config file.

**"config"** - Simply displays the config file.

**"edit config"** - Will prompt you with "ezedit_>>" which is the ezSeach editor. See below on how to change config settings. <br>
![alt text](https://github.com/ConnerAllen-Dev/ezSearch/blob/main/lib/githubImgs/screenshot3.png?raw=true) <br>
    `SET \<desired website> TO \<desired input>`<br>
    EXAMPLE: `SET google TO true`
    
**"help"** - Displays the help menu.   

**"exit"** - Exits program.


# Features
- Search up to 10 seperate e-commerce platforms with one click
- Automatic VeRo checker, will check the given product name and cross reference the eBay VeRo list. If matched, it will warn you that it is a registered VeRo product
- Customize which platforms you want to search on (Google, Ebay, Amazon are set by default)
- History which keeps trach of your searches and can reseach old searches
- CLI, a command line interface to interacting with program
- GUI, a clean graphical user interface via your web browser at "localhost:3000"

# TODO

- Fix error when user exits webpage before all pages are finished loading (puppeteer navigation error)

# Updates

No updates have been published yet
