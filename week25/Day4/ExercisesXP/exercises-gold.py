# Exercise 1: Concatenate lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

list1 = [1, 2, 3, 4]
list2 = [5, 6, 7, 8]
list1.extend(list2)

print(list1)

# Exercise 2: Range of numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

for i in range(1500, 2501):
    if i % 5 == 0 and i % 7 == 0:
        print(i)

# Exercise 3: Check the index
# Instructions
# Using this variable

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1   

names = ['Sarah', 'Victoria', 'Venus', 'Jack', 'Mario', 'Jo', 'John']
name = input('What is your name? ')
if name in names:
    print(names.index(name))
elif name not in names:
    print('Name not found, try again.')
    while name not in names:
      name = input('What is your name? ')
    print(names.index(name))



#     Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.
#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87

#     The greatest number is: 87

num1 = int(input('Input the 1st number: '))
num2 = int(input('Input the 2nd number: '))
num3 = int(input('Input the 3rd number: '))
if num1 > num2 and num1 > num3:
    print('The greatest number is:', num1)
elif num2 > num1 and num2 > num3:
    print('The greatest number is:', num2)
elif num3 > num1 and num3 > num2:
    print('The greatest number is:', num3)


    
# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

string = 'abcdefghijklmnopqrstuvwxyz'
vowels = 'aeiou'
for letter in string:
    if letter in vowels:
        print(letter, 'is a vowel.')
    else:
        print(letter, 'is a consonant.')

        

# Exercise 6: Words and letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

words = input('Please enter 7 words, separated by a space: ')
words = words.split()
letter = input('Please enter a single character: ')
for word in words:
    if letter in word:
        print(word.index(letter))
    else:
        print(f'{word} does not contain the letter {letter}.')


# Exercise 7: Min, Max, Sum
# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

numbers = list(range(1, 1000001))
print(min(numbers))
print(max(numbers))
print(sum(numbers)) # my sum number doe not work for some reason



# Exercise 8 : List and Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

numbers = input('Please enter a sequence of comma-separated numbers: ')
numbers = numbers.split(',')
print(numbers)
print(tuple(numbers))



# Exercise 9 : Random number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

number2 = int(input('Please enter a number from 1 to 9: '))
#not sure how to use the random module here
