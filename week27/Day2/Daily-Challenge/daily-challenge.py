# Instructions : Old MacDonald’s Farm
# Take a look at the following code and output:
# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())

# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

    # E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# Create a class called Farm. How should it be implemented?
# Does the Farm class need an __init__ method? If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# Test your code and make sure you get the same results as the example above.
# Bonus: nicely line the text in columns as seen in the example above. Use string formatting.

class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    
    def add_animal(self, animal, amount=1):
        if animal in self.animals:
            self.animals[animal] += amount
        else:
            self.animals[animal] = amount
    
    def get_info(self):
        info = f"{self.name}'s farm\n"
        for animal, amount in self.animals.items():
            info += f"{animal} : {amount}\n"
        return info
    
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())


# Expand The Farm
# Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

# Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.
# Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.

class Farm:
  def __init__(self, farm_name):
    self.name = farm_name
    self.animals = {}
  
  def add_animal(self, animal, amount=1):
    if animal in self.animals:
      self.animals[animal] += amount
    else:
      self.animals[animal] = amount
  
  def get_info(self):
    info = f"{self.name}'s farm\n"
    for animal, amount in self.animals.items():
      info += f"{animal}s : {amount}\n"
    return info
  
  def get_animal_types(self):
    return sorted(self.animals.keys())
  
  def get_short_info(self):
    animals = self.get_animal_types()
    info = f"{self.name}'s farm has "
    for i in range(len(animals)):
      if i == len(animals) - 1:
        info += f"{animals[i]}s."
      else:
        info += f"{animals[i]}s, "
    return info
  
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
