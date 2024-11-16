# 🌟 Exercise 1 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

def main():
    import random
    def get_random_temp():
        return random.randint(-10, 40)

    temperature = get_random_temp()
    print(f"The temperature right now is {temperature} degrees Celsius.")

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

    if temperature < 0:
        message += "Brrr, that’s freezing! Wear some extra layers today."
    elif temperature < 16:
        message += "Quite chilly! Don’t forget your coat."
    elif temperature < 24:
        message += "Nice weather, isn't it?"
    elif temperature < 32:
        message += "It's getting hot in here!"
    else:
        message += "It's boiling hot! Stay hydrated."

    print(message)
    


# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.

def get_random_temp(season):
    import random
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "summer":
        return random.randint(16, 40)
    elif season == "autumn" or season == "fall":
        return random.randint(0, 23)
    elif season == "spring":
        return random.randint(0, 16)
    else:
        return random.randint(-10, 40)
    


# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

def main():
    season = input("What season is it? ")
    temperature = get_random_temp(season)
    print(f"The temperature right now is {temperature} degrees Celsius.")

    message = ""
    if temperature < 0:
        message += "Brrr, that’s freezing! Wear some extra layers today."
    elif temperature < 16:
        message += "Quite chilly! Don’t forget your coat."
    elif temperature < 24:
        message += "Nice weather, isn't it?"
    elif temperature < 32:
        message += "It's getting hot in here!"
    else:
        message += "It's boiling hot! Stay hydrated."

    print(message)

main()