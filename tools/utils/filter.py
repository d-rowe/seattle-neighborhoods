import json

GEOJSON_PATH = './City_Clerk_Neighborhoods.geojson'
OUTPUT_PATH = './filtered.json'


def main():

    geojson = load_json()

    features = geojson['features']

    hood_values = load_hood_values()

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
                l_hood = l_hood.title()
                feature['properties']['L_HOOD'] = l_hood

            del feature['properties']['OBJECTID']
            del feature['properties']['SYMBOL']
            del feature['properties']['SYMBOL2']
            del feature['properties']['HOODS_']
            del feature['properties']['SHAPE_Length']
            del feature['properties']['SHAPE_Area']

            # Add house value index
            if s_hood in hood_values.keys():
                feature['properties']['VALUE_INDEX'] = hood_values[s_hood]
            # If no match for sub neighborhood, check large neighborhood
            elif l_hood in hood_values.keys():
                feature['properties']['VALUE_INDEX'] = hood_values[l_hood]

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


def load_hood_values():
    hood_values = {}
    fp = open('../housing_data/hood_values.csv', 'r')
    for line in fp:
        hood_tuple = line.strip().split(',')
        name = hood_tuple[0]
        vi = hood_tuple[1]
        hood_values[name] = vi
    return hood_values


if __name__ == '__main__':
    main()
