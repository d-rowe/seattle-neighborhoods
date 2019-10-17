const geojson = require('./filtered.json');
const simplify = require('simplify-geojson');
const fs = require('fs');

const TOLERANCE = 0.00002;

var simplified = simplify(geojson, TOLERANCE);

fs.writeFileSync('../../src/geojson/hoods.geojson', JSON.stringify(simplified));
