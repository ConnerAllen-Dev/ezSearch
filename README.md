# ezSearch
A tool for retrieving product information from multiple platforms at once. Search up to 10 platforms with one click

# Installation 
Installation can be done by cloning or downloading this repository

`git clone https://github.com/ConnerAllen-Dev/ezSearch.git`

# Launch (CLI)
ezSearch has a CLI and GUI available for users to interact with. To use the ezSearch CLI simply `cd` into the folder you cloned or downloaded the repository to then run `node ezSearch`.

# Launch (GUI)
To launch the GUI, simple follow the CLI launch instructions above and once the application has loaded, run `gui`. This will start a express server on "localhost:3000". To view the GUI, simply open your web browser and navigate to "localhost:3000" or "127.0.0.1:3000"

# Use 
Because the GUI is rather self explanitory to navigate, the use section will only apply to the CLI version.

**Commands:**

**"gui"** - Start a express server running on "localhost:3000" that displays ezSearch GUI.

**"search"** - Running search will prompt you for a product name. Simple type in your desired product name and ezSearch will open all windows set to true in the config file.

**"config"** - Simply displays the config file.

**"edit config"** - Will prompt you with "ezedit_>>" which is the ezSeach editor. See below on how to change config settings.
    **SET \<desired website> input**

