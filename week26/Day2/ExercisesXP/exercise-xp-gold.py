# Exercise 1 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.

def throw_dice():
    import random
    return random.randint(1, 6)



# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.

def throw_until_doubles():
    count = 0
    while True:
        count += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        print(f"({dice1}, {dice2})")
        if dice1 == dice2:
            return count
        
print(throw_until_doubles())


# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

def main():
    results = []
    for i in range(100):
        results.append(throw_until_doubles())
    return results

print(main())


# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.

def main():
    results = []
    for i in range(100):
        results.append(throw_until_doubles())
    total_throws = sum(results)
    average_throws = round(total_throws / 100, 2)
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")

main()

