#!/bin/bash
cd utils
python3 filter.py
node simplify.js
rm filtered.json

OLD=`du -h City_Clerk_Neighborhoods.geojson |cut -f 1`
NEW=`du -h ../../src/geojson/hoods.geojson |cut -f 1`

echo "From ${OLD} to ${NEW}"
