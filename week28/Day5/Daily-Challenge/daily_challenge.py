# Instructions :
# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.

import requests

def get_load_time(url):
    response = requests.get(url)
    return response.elapsed.total_seconds()

print(get_load_time("https://www.google.com"))
print(get_load_time("https://www.ynet.co.il"))
print(get_load_time("https://www.imdb.com"))
print(get_load_time("https://www.facebook.com"))
print(get_load_time("https://www.twitter.com"))

