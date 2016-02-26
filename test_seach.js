var zipcode = require('./index');

/*
* Seach by zipcode
* Returns data in [sector, province] format
*/
console.log(zipcode.lookup('10205'));

/*
* Seach by name
* Return Zipcode
*/
console.log(zipcode.seachByName('GAZCUE, SANTO DOMINGO'));
