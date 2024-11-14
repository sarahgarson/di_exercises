
# Instructions
# Here is a python code that generates a list of 20000 random numbers, called list_of_numbers, and a target number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728


# Copy this code, and create a program that finds, within list_of_numbers all the pairs of number that sum to the target number

def find_pairs(list_of_numbers, target_number):
  pairs = []
  for i in range(len(list_of_numbers)):
    for j in range(i + 1, len(list_of_numbers)):
      num1 = list_of_numbers[i]
      num2 = list_of_numbers[j]
      if num1 + num2 == target_number:
        pairs.append((num1, num2))
  return pairs

pairs = find_pairs(list_of_numbers, target_number)
print(pairs)



