# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

# It should do the following:
# Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.

# Once your code has decided that the user’s input is valid, it should find out the following:
# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.
# Display the information about the word in a user-friendly, nicely-formatted message such as:


# YOUR WORD :”MEAT”
# this is a valid English word.
# Anagrams for your word: mate, tame, team.

from anagram_checker import AnagramChecker

def main():
    anagram_checker = AnagramChecker()
    
    while True:
        print("\nMenu:")
        print("1. Input a word")
        print("2. Exit")
        
        choice = input("Enter your choice (1 or 2): ").strip()
        
        if choice == "1":
            word = input("Enter a word: ").strip().upper()
            
            if not word:
                print("Please enter a word.")
                continue
                
            if not word.isalpha():
                print("Error: Only alphabetic characters allowed.")
                continue
                
            if len(word.split()) > 1:
                print("Error: Only one word allowed.")
                continue
            
            print(f"\nYOUR WORD: {word}")
            
            if anagram_checker.is_valid_word(word):
                print("This is a valid English word.")
                anagrams = anagram_checker.get_anagrams(word)
                if anagrams:
                    print(f"Anagrams for your word: {', '.join(anagrams)}")
                else:
                    print("No anagrams found.")
            else:
                print("This is not a valid English word.")
                
        elif choice == "2":
            print("Thank you for using the Anagram Checker!")
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
