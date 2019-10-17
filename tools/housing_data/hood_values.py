import csv

file = 'Neighborhood_Zhvi_Summary_AllHomes.csv'

neighborhood_value = {}
with open(file, encoding="latin-1") as fh:
    rd = csv.DictReader(fh, delimiter=',')
    for row in rd:
        rw = dict(row)
        if rw['City'] == 'Seattle':
            neighborhood_value[rw['RegionName']] = rw['Zhvi']

print(len(list(neighborhood_value.keys())))

with open('hood_values.csv', 'w') as csv_file:
    writer = csv.writer(csv_file)
    for key, value in neighborhood_value.items():
       writer.writerow([key, value])
