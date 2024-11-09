
#Lists, Tuple and Sets:

# Given this list:

# list1 = [5, 10, 15, 20, 25, 50, 20]

# find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value

# Hint : Look at the index method

# Expected output:
# list1 = [5, 10, 15, 200, 25, 50, 20]

list1 = [5, 10, 15, 20, 25, 50, 20]
index = list1.index(20)
list1[index] = 200
print(list1) 


#Tuples 

# Unpack the following tuple into 4 variables


# a_tuple = (10, 20, 30, 40)

# Expected output:

# a_tuple = (10, 20, 30, 40)
# # Your code
# print(a) # should print 10
# print(b) # should print 20
# print(c) # should print 30
# print(d) # should print 40

a_tuple = (10, 20, 30, 40)
a, b, c, d = a_tuple
print(a)
print(b)
print(c)
print(d)

#Sets

#Sets and dictionaries have no notion of an element index, and therefore CANNOT be considered sequences. In mathematics, informally speaking, a sequence is an ordered list of objects (or events). Like a set, it contains members (also called elements, or terms).


#examples: 

my_set = set()

my_set.add("Rick")

my_set.add("Morty")

my_set.add("Rick")

print(my_set)
{"Rick", "Morty"}

this_set = {"banana", "apple", "cherry", "apple"}

print(this_set)
{'banana', 'cherry', 'apple'}

# the set named this_set is unordered


# For loops and While loops:


# Examples of For loop:

fruits = ['apple', 'banana', 'kiwi', 'pear']

for fruit in fruits:
  print(fruit)


cities = ["Tel Aviv", "San Francisco", "Paris", "Barcelona"]

for city in cities:
    print("I once went to", city)


# Range function:

# The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.

numbers = range(4, 19)


#Iterating Example of range function:

numbers = range(4, 19)

for number in numbers:
  print(number)

# To print numbers from 1 to 5, use range(1,6)

# Although it can be iterated, the result of range is not a list.

# To store it in a list, you can convert the results of range() directly into a list using the list() function. When you wrap list() around a call to the range() function, the output will be a list of numbers.

numbers = list(range(1,6))
print(numbers)

#exercise for loops:

#Accept a number from the user and print its multiplication table

number1 = int(input("Enter a number: "))
for i in range(1, 11):
    print(number1, 'x', i, '=', number1*i)



#While loop:

# The while loop in Python is used to iterate over a block of code as long as the test expression (condition) is true.

# We generally use this loop when we don't know beforehand, the number of times to iterate.

# Examples:

current_number = 1 
while current_number <= 5:    
    print(current_number)   
    current_number += 1

print("Finished")


password = ''
while password != 'hello-world-123':
  password = input('What is the top secret password? ')

print('You guessed the right password!')


#exercise while loop:

# Print the numbers from 1 to 10 using while loop

i = 1
while i <= 10:
    print(i)
    i += 1


# Infinite loop

# Some conditions will always be True, for example, if we run this code:

while 1 == 1:
    print("Looping...")
# It will never stop because 1 is always equal to 1. We can also use while 1: or while True:.
