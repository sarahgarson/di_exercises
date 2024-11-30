# Instructions :
# Consider this list

# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module. Take a look at the googletrans module

import googletrans

def translate_words(words):
    translator = googletrans.Translator()
    return {word: translator.translate(word).text for word in words}

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
print(translate_words(french_words))

