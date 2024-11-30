# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text
        self.words = text.lower().split()
    
    def word_frequency(self, word):
        word = word.lower()
        frequency = self.words.count(word)
        if frequency > 0:
            return f"The word '{word}' appears {frequency} times"
        return f"The word '{word}' is not in the text"
    
    def most_common_word(self):
        return Counter(self.words).most_common(1)[0][0]
    
    def unique_words(self):
        return list(set(self.words))
    
    @classmethod
    def from_file(cls, filepath):
        file_path = "/Users/sarahgarson/Documents/di_exercises/week28/Day4/Daily-Challenge/the_stranger.txt"
        with open(file_path, 'r') as file:
            return cls(file.read())


text1 = Text("A good book would sometimes cost as much as a good house.")
print(text1.word_frequency('good'))
print(text1.most_common_word())
print(text1.unique_words())


text2 = Text.from_file('the_stranger.txt')
print(text2.most_common_word())
