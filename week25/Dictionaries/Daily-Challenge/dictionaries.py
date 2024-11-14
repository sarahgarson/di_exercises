# Instructions

# Challenge 1
# Ask a user for a word

word = input('Enter a word: ')

# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

word_dict = {}
for i in range(len(word)):
    if word[i] not in word_dict:
        word_dict[word[i]] = [i]
    else:
        word_dict[word[i]].append(i)
print(word_dict)



# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.

items_purchase = { 
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

# Convert the wallet to a number
wallet = int(wallet[1:].replace(',', ''))

# Create a list of items that can be purchased
purchased_items = []
for item, price in items_purchase.items():
    price = int(price[1:].replace(',', ''))
    if price <= wallet:
        purchased_items.append(item)

# Sort the list in alphabetical order
purchased_items.sort()

# Return “Nothing” if you can’t afford anything from the store.
if len(purchased_items) == 0:
    print('Nothing')
else:
    print(purchased_items)




