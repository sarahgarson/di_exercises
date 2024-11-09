# 🌟 Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {12, 24, 32, 14, 16}
my_fav_numbers.add(8)
my_fav_numbers.add(6)
my_fav_numbers.remove(16)
friend_fav_numbers = {6, 8, 10, 12, 14}
our_fav_numbers = my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)


# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# No, tuples are immutable. 

# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)


# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

# The difference between an integer and a float is that an integer is a whole number and a float is a number with a decimal point.

sequence = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
print(sequence)

sequence1 = []
for i in range(1, 6):
    sequence1.append(i + 0.5)
    sequence1.append(i)
print(sequence1)



# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)
    

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

name = ''
while name != 'Sarah':
    name = input('What is your name? ')
print('Hello, Sarah!')


# 🌟 Exercise 7: Favorite fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

favorite_fruits = input('What are your favorite fruits? Please use a single space in between the fruits')
favorite_fruits = favorite_fruits.split()
fruit = input('Please enter a fruit: ')
if fruit in favorite_fruits:
    print('You chose one of your favorite fruits! Enjoy!')
else:
    print('You chose a new fruit. I hope you enjoy!')


# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

toppings = []
topping = ''
while topping != 'quit':
    topping = input('Please enter a pizza topping: ')
    if topping != 'quit':
        toppings.append(topping)
        print(f'I will add {topping} to your pizza.')
print('Your pizza will have the following toppings:', toppings)
total_price = 10 + 2.5 * len(toppings)
print(f'The total price of your pizza is ${total_price}')


# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

family = []
age = ''
total_cost = 0
for i in range(3):
    age = int(input('Please enter your age: '))
    if age < 3:
        total_cost += 0
    elif age >= 3 and age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print(f'The total cost of the family\'s tickets is ${total_cost}')

teenagers = ['Sarah', 'John', 'Mike', 'Lily', 'Tom']
for teenager in teenagers:
    age = int(input(f'Please enter {teenager}\'s age: '))
    if age < 16 or age > 21:
        teenagers.remove(teenager)

print(teenagers)

#not sure why but its not asking John ans Lily for their age



# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while 'Pastrami sandwich' in sandwich_orders:
    sandwich_orders.remove('Pastrami sandwich')

finished_sandwiches = []
while sandwich_orders:
    sandwich = sandwich_orders.pop()
    finished_sandwiches.append(sandwich)
    print(f'I made your {sandwich}')

print(finished_sandwiches)


