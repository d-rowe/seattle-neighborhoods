import json

GEOJSON_PATH = './City_Clerk_Neighborhoods.geojson'
OUTPUT_PATH = '../src/geojson/hoods.geojson'


def main():
    geojson = load_json()

    features = geojson['features']

    filtered_features = []
    for feature in features:
        s_hood = feature['properties']['S_HOOD']
        l_hood = feature['properties']['L_HOOD']

        if s_hood != 'OOO' and s_hood != ' ':  # Ignore small islands
            if l_hood == 'NO BROADER TERM':
                # Replace NO BROADER TERM with None
                feature['properties']['L_HOOD'] = 'None'
            else:
                # Title case L_HOOD
                feature['properties']['L_HOOD'] = l_hood.title()
            
            del feature['properties']['OBJECTID']
            del feature['properties']['SYMBOL']
            del feature['properties']['SYMBOL2']
            del feature['properties']['HOODS_']
            del feature['properties']['SHAPE_Length']
            del feature['properties']['SHAPE_Area']

            filtered_features.append(feature)

    processed_geojson = {
        "type": "FeatureCollection",
        "features": filtered_features}

    write_json(processed_geojson)


def load_json():
    with open(GEOJSON_PATH, 'r') as f:
        return json.load(f)


def write_json(data):
    with open(OUTPUT_PATH, 'w') as outfile:
        json.dump(data, outfile)


if __name__ == '__main__':
    main()
