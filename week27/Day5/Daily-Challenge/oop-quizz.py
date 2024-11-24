# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?
# A blueprint or template for creating objects.


# What is an instance?
# An object created from a class.


# What is encapsulation?
# Bundling data and methods that work on that data together, like keeping related stuff together in one package.


# What is abstraction?
# Hiding complex details while showing only essential features, basically showing only what users need to see.


# What is inheritance?
# A class getting properties and methods from another class.


# What is multiple inheritance?
# A class inheriting from more than one parent class.


# What is polymorphism?
# Same method name working differently for different classes, same action working differently for different things.



# What is method resolution order or MRO?
# The path Python takes to find the right instructions.


# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

class Deck:
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        self.cards = [{"suit": suit, "value": value} for suit in self.suits for value in self.values]
    
    def shuffle(self):
        import random
        random.shuffle(self.cards)
    
    def deal(self):
        return self.cards.pop()
    
deck = Deck()
deck.shuffle()
print(deck.deal())
print(deck.deal())





