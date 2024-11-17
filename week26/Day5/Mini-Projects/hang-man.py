# Instructions
# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.

import random

words = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit', 'rush', 'south']

secret_word = random.choice(words)
hidden = '*' * len(secret_word)
wrong_guesses = 0
guessed_letters = []

print('Welcome to Hangman!')
print(hidden)

while wrong_guesses < 6:
    guess = input('Guess a letter: ')
    
    if guess in guessed_letters:
        print('You already guessed that letter! Try another one.')
        print(hidden)
        continue
        
    guessed_letters.append(guess)

    if guess in secret_word:
        temp = ''
        for i in range(len(secret_word)):
            if secret_word[i] == guess:
                temp = temp + guess
            else:
                temp = temp + hidden[i]
        hidden = temp
        print(hidden)

        if hidden == secret_word:
            print('You won! The word was:', secret_word)
            break
    else:
        wrong_guesses = wrong_guesses + 1
        print('Wrong! You have', 6 - wrong_guesses, 'tries left')
        print(hidden)

if wrong_guesses == 6:
    print('Game Over! The word was:', secret_word)








