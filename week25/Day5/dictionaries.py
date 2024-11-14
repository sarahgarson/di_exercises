# Dictionaries
# Dictionary is a data type provided by python, which is another collection of objects.

# A dictionary is similar to a list, in many ways:

# It’s mutable (his elements can be changed)
# It’s dynamic (it can grow as needed)
# Dictionaries are an unordered collection of items that store values on a key-value pair basis.

# With a dictionary, you create a structured piece of data and retrieve values using a key.

# You can think of them as a spreadsheet table: you have columns with names (keys) and cells with data (values).


# Difference between dictionaries and lists
# How elements are accessed:
# In lists, elements are accessed by their position in the list (via indexing)

# Example:
my_list = ['Rick', 'Sanchez']
print("My last name is:", my_list[1])

# To access the word "Sanchez", we need to put his index in the square brackets [].

# In dictionaries, it’s a bit different; elements have no index; they are accessed via keys. A dictionary is an associative array, it consists of a collection of key-value pairs. Each key=value pair maps the key to its associated value (for example, the key first_name is associated to Rick, and the key last_name is associated with Sanchez).


# 1. Define a dictionary
# While lists are defined by square brackets [], dictionaries are defined by enclosing a list of key-value pairs in curly braces {}.
# A colon : is used to separate each key from its associated value:

# my_dict = {
#     <KEY1>: <VALUE1>,
#     <KEY2>: <VALUE2>,
#     <KEY3>: <VALUE3>
# }

# Example:

rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}

#Keys need to be declared as strings with quotation marks. Values can be of any type.

my_dog = {
  'name': 'Rufus',
  'age': 4,
  'good_dog': True
}

# 2. Accessing data
# Accessing values in a dictionary is just a matter of referencing the key of that value between brackets. This is similar to how we access values from a list, but instead of using the index of the value, we use the name of its key.

# my_dog = {
#   'name': 'Rufus',
#   'age': 4
# }

# print(my_dog['name'])

# >> 'Rufus'

#Example:

rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
print("The last name of rick is:", rick_dict['last_name'])


#If you refer to a key that is not in the dictionary, you will get an error:

# 3. Data types
# You can store any type of data inside a dictionary. That could be strings and integers but also other dictionaries or lists.

my_dog = {
  'name': 'Rufus',
  'age': 4,
  'best_friend': {
    'name': 'Felix',
    'age': 4.5
  },
  'favorite_foods': ['steaks', 'sausages', 'shawarma']
}

# Dictionaries and lists
# Dictionaries can be especially useful when stored in a list to represent a collection of multiple items representing the same thing, such as a list of products.

shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]



# Exercise
# Access the value of key history


sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict['class']['student']['marks']['history'])



# 4. Modify an entry in a dictionary
# Modifying an element in a dictionary works the same as a list, first, you need to select it (with his key) and then assign it to a new value with the equal sign =.

rick_dict['last_name'] = 'SANCHEZ'

# 5. Adding an entry to an existing dictionary
# To add an entry to an existing dictionary, just assign a new key to its value, like you would have modified it if it was an existing key.

rick_dict['hair_color'] = 'white'

# 6. Delete an entry in a dictionary
# To delete an entry, use the del statement, specifying the key to delete:

del rick_dict['hair_color']




# Keys restrictions
# Almost any type of value can be used as a dictionary key in Python. But there are a couple of restrictions.

# First, keys are uniques; they can appear in a dictionary only once; if you assign a value to an existing dictionary key, it does not add the key a second time but replaces the current value.
# Secondly, the key must be an immutable type; it can be an integer, a float, a string, a boolean, and even a tuple because all those types are immutables. List can’t be a dictionary key.
# By contrast, there are no restrictions on dictionary values.


# The in keyword
# In a list, the in keyword returns True or False according to whether the specified operand occurs in the list.

# A dictionary returns True if the operand occurs as a key in the dictionary.

# Iterating

# Iterating over a list of dictionaries is simple; your iterator contains the dictionary you want to look at.

for shirt in shirts:
  print(shirt['size'])

# >> S
# >> M
# >> L


# Built-in methods
# keys()
# The my_dict.keys() method returns a dict_keys of all the keys in my_dict

# values()
# The my_dict.values() method returns a dict_values of all the values in my_dict

# items()
# The my_dict.items() method returns a dict_items of tuples containing the key-value pairs in a dictionary.

rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}
print(rick_dict.items())

# update(<key>)
# If <obj> and d are dictionaries, d.update(<obj>) merges the entries from <obj> into d.

# For each key in <obj>:

# If the key is not present in d, the key-value pair from <obj> is added to d.
# If the key is already present in d, the corresponding value in d for that key is updated to the value from <obj>.

# Exercise
# Delete set of keys from Python Dictionary


sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
  del sample_dict[key]

print(sample_dict)


