
# Data type

# Numbers: integers (not deicimal), float (decimal), complex
   # print(dir(42)) # - reggular number - not showing type
   # print(type(42)) # - integer 
   # print(type(42.0)) # - float
   # print(type(42j)) # - complex (witht he letter)


              #under numbers type we could also include boolen since they are 1 or 0 (True or False), but in the course we'll keep it separate



#Strings: text, characters sequence, words 
   # my_string = 'hello' # - string
   # my_string = 'That\'s me!' # - string with the \ to escape the single quote

#counting the index of the string
   # print(my_string[0]) # - T
   # print(my_string[1]) # - h
   # print(my_string[2]) # - a
   # #etc..

# #or, to take a whole word
   # print(my_string[0:4]) # - That
   # print(my_string[7:9]) # - me
   # print(my_string[7:]) # - me! from 7 to the end
   # print(my_string[:4]) # - That from the beginning to 4

   #string methods
     # print("hello there!".capitalize()) # - Hello there!
     # print("hello there!".title()) # - Hello There!
     # print("hello there!".upper()) # - HELLO THERE!
     # print("hello there!".lower()) # - hello there!
     # print("hello there!".count('e')) # - 3 - counting the number of 'e' in the string

   #replacing a word in the string
     # greetings = 'Ola, como voce esta?'
     # print(greetings.replace('Ola', 'Hello')) # - Hello, como voce esta?

   #splitting the string
     # print(greetings.split()) # - ['Ola,', 'como', 'voce', 'esta?'] - splitting by the space

   #adding dollar sign to the string
    # price = '$100'
    # price = price.replace('$', '') # - 100 - removing the   #dollar sign and adding a clean space instead of it
    # print(int(price))

  #strip method
    # price2 = ' $100 '
    # price2 = price2.strip() # - $100 - removes the spaces in the beginning and in the end of the string
    # #price2 = price.strip('$') # - $100 - removes the dollars sign only if it is in the beginning or in the end of the string 
    # print(price2)

  #input method with strip
     # user_name = input('What is your name? ').strip() # - removes the spaces in the beginning and in the end of the string
     #     #print(user_name) #cso when the user enters the name with the space in the beginning, it will remove it and print the first letter of the name
     #    #result in the terminal:
     #    # What is your name? Sarah
     #    # Sarah

   #f-string - formatting the string
  
      #print(f'Hello, {user_name}!') # - Hello, Sarah! - the f-string is used to format the string and to add the variable inside the string


  #Type casting
    # user_age = input('What is your age? ')
    # user_age = int(user_age) # - converting the string to the integer
    # print(user_age) # - 23 - the age of the user

    # user_height = input('What is your height? ')
    # user_height = float(user_height) # - converting the string to the float because the height could be a decimal number
    # print(user_height) # - 1.57 - the height of the user

    # user_phone = input('What is your phone number? ')
    # print(str(user_phone)) # - 1234567890 - converting the number to the string because we cannot add the number to the string


   #printing multiple time the string
     # print('Hello ' * 5) # - Hello Hello Hello Hello Hello - printing the string 5 times

  #printing the string with the new line
     # print('Hello\nWorld!') # - Hello - World! - printing the string in two lines

     # print('Hello\n' * 5)


#exercise, creating a variable first_name nad last_name and printing the full name
   # first_name = 'Sarah'
   # last_name = 'Smith'
   # print(f'Hello, {first_name} {last_name}!') # - Hello, Sarah Smith! - printing the full name 

#Boolean: True or False

#type of the boolean
# print(type(True)) # - bool - boolean
# print(type(False)) # - bool - boolean

  #comparison operators
    # print(5 == 5) # - True - comparing if 5 is equal to 5
    # print(5 != 5) # - False - comparing if 5 is not equal to 5
    # print(5 > 5) # - False - comparing if 5 is greater than 5
    # print(5 < 5) # - False - comparing if 5 is less than 5
    # print(5 >= 5) # - True - comparing if 5 is greater or equal to 5
    # print(5 <= 5) # - True - comparing if 5 is less or equal to 5

    #my_name = 'John'
    # print(my_name == 'Sarah') # - True - comparing if the name is Sarah

# and operator
    # print(my_name == 'Sarah' and 6 < 3) # - False - comparing if the name is Sarah and if 6 is less than 3

# if statement

     # if my_name == 'Sarah':
     #   print(f'Hello, {my_name}!')
     # else:
    #   print('Hello, stranger!')

# if statement with the input
   # user_name = input('What is your name? ').strip()
   # if user_name == 'Sarah':
   #   print(f'Hello, {user_name}!')
   # else:
   #   print('Hello, stranger!')

# if statement with the input and the age
   # user_age = input('What is your age? ')
   # user_age = int(user_age)
   # if user_age >= 18:
   #   print('You are an adult!')
   # else:
   #   print('You are a child!')

# if statement with elif
  # user_age = input('What is your age? ')
  # user_age = int(user_age)
  # if user_age >= 18:
  #   print('You are an adult!')
  # elif user_age >= 13:
  #   print('You are a teenager!')
  # else:
  #   print('You are a child!')

# OR operator
  # user_name = input('What is your name? ').strip()
  # if user_name == 'Sarah' or user_name == 'John':
  #   print(f'Hello, {user_name}!')
  # else:
  #   print('Hello, stranger!')


#exercise 2:


user_number = input('Enter a number between 1 and 100: ')
user_number = int(user_number)
if user_number % 3 == 0 and user_number % 5 == 0:
  print('FizzBuzz')
elif user_number % 3 == 0:
  print('Fizz')
elif user_number % 5 == 0:
  print('Buzz')
else: 
  print('Try again!')

