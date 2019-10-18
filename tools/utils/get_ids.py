import json

GEOJSON_PATH = '../../src/geojson/hoods.geojson'
OUTPUT_PATH = '../../src/geojson/hood_ids.json'


def main():
    geojson = load_json()

    hood_ids = []

    for feature in geojson['features']:
        props = feature['properties']
        hoods_id = props['HOODS_ID']
        l_hood_id = props['L_HOODID']
        s_hood = props['S_HOOD']
        l_hood = props['L_HOOD']

        hood_ids.append({'s_hood': s_hood,
                         'l_hood': l_hood,
                         'hoods_id': hoods_id,
                         'l_hood_id': l_hood_id,
                         })
    write_json(hood_ids)


def load_json():
    with open(GEOJSON_PATH, 'r') as f:
        return json.load(f)


def write_json(data):
    with open(OUTPUT_PATH, 'w') as outfile:
        json.dump(data, outfile)


if __name__ == '__main__':
    main()
