import json

GEOJSON_PATH = '../src/geojson/hoods.geojson'
OUTPUT_PATH = '../src/geojson/hood_ids.json'


def main():
    geojson = load_json()

    s_hoods = {}
    l_hoods = {}

    for feature in geojson['features']:
        props = feature['properties']
        hoods_id = props['HOODS_ID']
        l_hood_id = props['L_HOODID']
        s_hood = props['S_HOOD']
        l_hood = props['L_HOOD']

        if hoods_id not in s_hoods.keys():
            s_hoods[hoods_id] = s_hood

        if l_hood_id not in l_hoods.keys():
            if l_hood == 'NO BROADER TERM':
                l_hood = 'None'
            l_hoods[l_hood_id] = l_hood.title()

    s_hoods_sorted = {}
    for key in sorted(s_hoods.keys()):
        s_hoods_sorted[key] = s_hoods[key]
        # print(key , " :: " , s_hoods[key])
    s_hoods = sort_dict(s_hoods)
    l_hoods = sort_dict(l_hoods)

    write_json({'l_hoods': l_hoods, 's_hoods': s_hoods})


def sort_dict(dictionary):
    sorted_dict = {}
    for key in sorted(dictionary.keys()):
        sorted_dict[key] = dictionary[key]
    return sorted_dict


def load_json():
    with open(GEOJSON_PATH, 'r') as f:
        return json.load(f)


def write_json(data):
    with open(OUTPUT_PATH, 'w') as outfile:
        json.dump(data, outfile)


if __name__ == '__main__':
    main()
