import re

pattern = '(\+359-2-[0-9]{3}-[0-9]{4}|\+359 2 [0-9]{3} [0-9]{4})\\b'

text = input()

matches = re.findall(pattern, text)

print(', '.join(matches))