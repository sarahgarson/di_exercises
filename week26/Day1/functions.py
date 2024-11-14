# Functions

#1. Syntax
# Example of a simple function that says hello
def say_hello():
    """A function that says hello"""
    print("Hello!") 

say_hello()
# This example shows the simplest structure of a function.


# Example
def my_function(fname):
    print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")
# This function expects one argument (fname).

#or

def say_hello(username):
    print("Hello "+username)

say_hello("Rick") # "Rick" is an argument
# output "Hello Rick"

say_hello("Morty") # "Morty" is an argument
# output "Hello Morty"



#2. important the below, check it out!!!

# In the function definition, we add the parameter that will accept a value.
def say_hello(username):
    print("Hello "+username)


# In the function call, we pass the value (ie. an argument).
say_hello("Rick") # "Rick" is an argument
# output "Hello Rick"


# Here the function will execute the same code but with a different value for username.

say_hello("Rick") # "Rick" is an argument
# output "Hello Rick"

say_hello("Morty") # "Morty" is an argument
# output "Hello Morty"


# Be careful!: If the function expects one argument, you can pass only one argument; less or more will throw an error.


# Example of a function that accept more than one argument
def say_hello(username, language):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello("Rick", "FR")


# 3. Keyword arguments

# You can also send arguments with the key = value syntax.
# This way the order of the arguments does not matter.

def say_hello(username, language):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello(username="Rick", language="FR")


# You can use both keyword and positional arguments in the same function call, but you need to place every positional argument before the keyword ones.

# For example, this will work:

say_hello("Rick", language="FR")


# But this wont:

# say_hello(username="Rick", "FR")


# 4. Default values

# You can also set a default value for the parameter. If the function is called without the argument, it uses the default value.

def say_hello(username="Guest"):
    print("Hello "+username)

say_hello("Rick")

say_hello()

#or 

def say_hello(username, language="EN"):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello("Rick")
# OR
say_hello(username="Rick")

# We changed the definition of say_hello to include a default value, “EN”, for language.

# When the function is called with no language specified, Python knows to use the value “EN” for this parameter.

# To use a language other than english, you could use a function call like this:

say_hello("Rick", "FR")
# OR
say_hello(username="Rick", language="FR")
# Because an explicit argument for language is provided, Python will ignore the parameter’s default value.

# When you use default values, any parameter with a default value must be listed after all the parameters that don’t have default values. This allows Python to continue interpreting positional arguments correctly.


# 5. Avoiding argument errors

# When you start to use functions, you may get an error message that says something like: “TypeError: function_name() missing 1 required positional argument: ‘argument_name’”.

# This error means that you forgot to include the required argument when you called the function.

# To avoid this error, you can provide a default value for each argument in the function definition. If an argument is provided in the function call, Python uses that value. If not, it uses the default value.

# For example, here’s what happens if we try to call say_hello() with no arguments:

# Traceback (most recent call last): 
#     File "app.py", line 6, in <module> say_hello()
# TypeError: say_hello() missing 2 required positional arguments: 'username' and 'language'


# 6. Local and Global scope
# Local scope
def number_by_three(name, day):
   sentence = f'Hello {name}! Today is {day}.'
   print(sentence)

print(number_by_three("Avner", "Monday"))

# >> NameError: name 'day' is not defined


# Global scope
name = 'Avner'

def say_hi():
   print(name)

say_hi()

# >> 'Avner'



# 7 . Return values

# A function can return a value to the code that called it. The value the function returns is called a return value.

# The return statement takes a value from inside a function and sends it back to the line that called the function.

# A return statement consists of:

# The return keyword.
# The value or expression that the function should return.
# The value the function returns is called a return value.

# Example

#Returning a simple value:

def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)
# output 8


#Returning more than one value with a tuple

def add_numbers(a, b):
    return a + b, a - b

result = add_numbers(5, 3)
print(result)

# output (8, 2)

#We already saw that a tuple can be unpacked:

my_tuple = ("jimi", "hendrix")
first_name, last_name = my_tuple
print("First name is: " + first_name)
print("Last name is: " + last_name)
# First name is jimi
# Last name is hendrix
# If so, we can return a tuple at the end of the function, and unpack it when we call it:

def format_name(first_name, last_name):
    return (first_name.title(), last_name.title())

first, last = format_name("RICk", "mORTY")
print(first)
print(last)


# Rick
# Morty
# The function receives a first_name and a last_name, then formats them and returns them as a tuple.

# On the function call, the tuple is unpacked into two variables, first and last.




#--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Passing list as function arguments
# Function arguments can be any Python data type; you can pass strings as well as a list.

# For example, a function that greets a list of user:

def greet_users(users):             # users should be a list
    for user in users:              # Because it's a list, we can loop through it
        print("Hello " + user.title() + " !")       # For each user, print "hello" and then his name

usernames = ["steve", "stan", "debbie"]
greet_users(usernames)


# Hello Steve!
# Hello Stan!
# Hello Debbie!

# In this example, the greet_users() function expects a list of users. The function loops through the list and greets each user.

# When we call greet_users(), we pass it a list of usernames. The function greets each user in the list.

# The function greet_users() expects a list of users, which it loops through and greets each one.



# Seeing functions as an address
# When you run a program, your computer loads the source code from the hard disk (HDD) and starts to allocate a piece of random access memory (RAM), which is a lot faster than HDD, but also smaller. RAM is used to store temporary values, like variables.

# Example with functions
# For example, let’s create three functions:

def my_f1():
    print("Hello")

def my_f2():
    print("Word")

def my_f3():
    print("This is Rick!")
# If we refer to functions as variables, we can store them in a list:

list_of_functions = [my_f1, my_f2, my_f3]
# Be sure to remove the round brackets, else the function will be executed, and you will store the result.

# And now that we have a list of variables that can be executed when adding round brackets let’s run them with a for loop

for function in list_of_functions:
    function()


#Modifying a list in a function

# You can modify a list in a function, but you need to be careful. If you pass a list to a function, the function can modify the list.

# For example, consider a company that creates 3D printed models of designs that users submit. Designs that need to be printed are stored in a list, and after being printed they’re moved to a separate list. The following code does this without using functions.

unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron'] 
completed_models = []

# Simulate printing each design until none are left. 
# Move each design to completed_models after printing. 

while len(unprinted_designs) != 0:    
    current_design = unprinted_designs.pop() 

    # Simulate creating a 3D print from the design.    
    print("Printing model: " + current_design)    
    completed_models.append(current_design)    

# Display all completed models. 
print("\nThe following models have been printed:") 
for completed_model in completed_models:    
    print(completed_model)


# This program starts with a list of designs that need to be printed and an empty list called completed_models that each design will be moved to after it has been printed.

# As long as designs remain in unprinted_designs, the while loop simulates printing each design by removing a design from the end of the list, storing it in current_design, and displaying a message the current plan is being printed.

# It then adds the design to the list of completed models. When the loop is finished running, a list of the methods that have been printed is displayed.



# We can reorganize this code by writing two functions, each of which does one specific job.

# Most of the code won’t change; we’re just making it more efficient.

# The first function will handle printing the designs, and the second will summarize the points that have been made:

def print_models(unprinted_designs, completed_models):
    """    
    Simulate printing each design until none are left.    
    Move each design to completed_models after printing.    
    """

    while unprinted_designs:        
        current_design = unprinted_designs.pop()            

        # Simulate creating a 3D print from the design.        
        print("Printing model: " + current_design)        
        completed_models.append(current_design)        

def show_completed_models(completed_models):    
    """
    Show all the models that were printed.
    """    
    print("\nThe following models have been printed:")   
    for completed_model in completed_models:        
        print(completed_model)        

unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron'] 
completed_models = []

print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)