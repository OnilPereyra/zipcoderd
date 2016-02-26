var fs = require('fs');
var trie = null;

/**
 * Get data by lines 
 */
function getLine(){
  var data = fs.readFileSync(__dirname + '/zip_codes.csv', 'utf8');
  return data.split('\r\n');
};

/**
 * Parses zip_codes.csv and creates a trie for fast lookups
 */
function loadData() {  
  var lines = getLine();
  var trie = {};

  lines.forEach(function(line) {
    var parts = line.split(',');
    var zip = parts[0], sector = parts[1], province = parts[2];
    var node = trie;

    for (var i = 0; i < zip.length; i++) {
      var num = zip[i];
      var pos = node[num];
      if (pos == null){
        node = node[num] = (i === zip.length - 1) ? [sector, province] : {};
      }
      else{
        node = node[num];
      }
    }
  });

  return trie;
}

/**
 * Lookup a zipcode
 * Returns data in [sector, province] format
 */
exports.lookup = function(zip) {
  if (zip.length < 5)
    return null;

  if (!trie)
    trie = loadData();

  var node = trie;
  for (var i = 0; i < zip.length; i++) {
    var node = node[zip[i]];
    if (node == null){
      return null;
    }
  }

  return Array.isArray(node) ? node : null;
};


/**
 * Search by the name of the municipality and province
 * Return: Zipcode
 */
exports.seachByName = function(name) {
  var lines = getLine();
  var value = null; 

  if(!name){
    return value;
  }   

  lines.forEach(function(line) {
    var parts = line.split(',');
    var zip = parts[0], sector = parts[1], province = parts[2];
  
    if(name.split(' ').join('').toUpperCase() === (sector +','+ province).split(' ').join('') ){
      value = zip;
      return;
    }  
  });  
  return value;
};
