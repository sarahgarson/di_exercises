# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?


def get_words_from_file():
    file_path = "/Users/sarahgarson/Documents/di_exercises/week28/Day4/ExercisesXP/words.txt"
    with open(file_path, "r") as file:
        return file.read().splitlines()

    
words = get_words_from_file()
print(words)


# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.
# Take the random words and create a sentence (using a python method), the sentence should be lower case.

import random 

def get_random_sentence(length):
    return " ".join(random.choices(words, k=length)).lower()

print(get_random_sentence(5))


# Create a function called main which will:

# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.

def main():
    print("This program generates random sentences.")
    length = input("How long would you like the sentence to be? ")
    if length.isdigit():
        length = int(length)
        if 2 <= length <= 20:
            print(get_random_sentence(length))
        else:
            print("The length must be between 2 and 20.")
    else:
        print("The length must be an integer.")

main()



# 🌟 Exercise 2: Working with JSON
# Instructions
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


# Access the nested “salary” key from the JSON-string above.

data = json.loads(sampleJson)
print(data["company"]["employee"]["payable"]["salary"])


# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.

data["company"]["employee"]["birth_date"] = "1990-01-01"
print(data)

# Save the dictionary as JSON to a file.

with open("data.json", "w") as file:
    json.dump(data, file)

    

