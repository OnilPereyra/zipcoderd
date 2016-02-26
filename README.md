zipcoderd
=======

Node module to easily lookup sector and province for a Dominican Republic zipcode

Install using npm:

    npm install zipcoderd

```javascript
var zipcode = require('zipcoderd');

// returns data in [sector, province] format
zipcode.lookup('10205'); // ['GAZCUE','SANTO DOMINGO']
```
## Search by the name of the municipality and province
```javascript
var zipcode = require('zipcoderd');

//Return Zipcode
zipcode.seachByName('GAZCUE, SANTO DOMINGO');
```
## License

MIT
