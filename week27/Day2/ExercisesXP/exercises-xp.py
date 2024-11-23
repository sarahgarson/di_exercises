# 🌟 Exercise 1: Cats
# Instructions
# Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Instantiate three Cat objects using the code provided above.

cat1 = Cat("Tom", 5)
cat2 = Cat("Jerry", 3)
cat3 = Cat("Sylvester", 7)



# Outside of the class, create a function that finds the oldest cat and returns the cat.

def oldest_cat(*cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest



# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

oldest = oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")



# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

# Create a method called bark that prints the following string “<dog_name> goes woof!”.

    def bark(self):
        print(f"{self.name} goes woof!")  


# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.

    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")



# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.

davids_dog = Dog("Rex", 50)


# Print the details of his dog (ie. name and height) and call the methods bark and jump.

print(f"David's dog is called {davids_dog.name} and is {davids_dog.height} cm tall.")

# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.

sarahs_dog = Dog("Teacup", 20)

# Print the details of her dog (ie. name and height) and call the methods bark and jump.

print(f"Sarah's dog is called {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")

# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger.")
else:
    print(f"{sarahs_dog.name} is bigger.")



# 🌟 Exercise 3 : Who’s the song producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

here_comes_the_sun = Song(["Here comes the sun", "Here comes the sun", "And I say", "It's all right"])


# Then, call the sing_me_a_song method. The output should be:

here_comes_the_sun.sing_me_a_song()



# Exercise 4 : Afternoon at the Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name



# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print(f"{new_animal} is already in the zoo.")



# Create a method called get_animals that prints all the animals of the zoo.

    def get_animals(self):
        print(self.animals) 
        

# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} is not in the zoo.")


# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.

    def sort_animals(self):
        sorted_animals = {}
        for animal in self.animals:
            if animal[0] in sorted_animals:
                sorted_animals[animal[0]].append(animal)
            else:
                sorted_animals[animal[0]] = [animal]
        return sorted_animals


# Create a method called get_groups that prints the animal/animals inside each group.

    def get_groups(self):
        sorted_animals = self.sort_animals()
        for key, value in sorted_animals.items():
            print(f"{key}: {', '.join(value)}")


# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Tiger")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Penguin")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Snake")
ramat_gan_safari.sell_animal("Lion")
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()
