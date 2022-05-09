
const fs = require('fs');

const veroCheck = (productName) => {
	let arr = fs.readFileSync('./lib/veroList.txt').toString().split(' : ');

	arr.forEach(item => {
		if(productName.includes(item)){
			console.log(`\n !!!!! WARNING !!!!! - This product...  has shown up on the VeRo list. Meaning you MUST supply your own photos and description when listing this item!`)
			return false;
		}
	})
	return true;
} 



module.exports = veroCheck;