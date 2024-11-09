# Instructions
# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

number = int(input('Enter a number: '))
length = int(input('Enter the length: '))
multiples = []
for i in range(1, length+1):
    multiples.append(number * i)
print(multiples)


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

word = input('Enter a word: ')
new_word = ''
for i in range(len(word)):
    if i == 0:
        new_word += word[i]
    elif word[i] != word[i-1]:
        new_word += word[i]
print(new_word)

