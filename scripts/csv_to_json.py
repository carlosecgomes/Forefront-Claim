import json
import csv
import sys
import math

output = []

with open(sys.argv[1]) as fle:
    f = csv.DictReader(fle)
    for line in f:
        line["tokens"] = math.floor(float(line['tokens']))
        if int(line['tokens']) > 0:
            obj = {}
            obj['address'] = line['wallet']
            # convert to string to match js merkle code's expected format
            obj['earnings'] = str(int(line['tokens']) * pow(10,18))
            obj['reasons'] = ''

            output.append(obj)

dump = json.dumps(output)

with open(sys.argv[2] + '.json', 'w') as fle:
    fle.write(dump)
