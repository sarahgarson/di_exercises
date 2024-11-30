# 🌟 Exercise 1: Currencies
# Instructions
class Currency:
     def __init__(self, currency, amount):
       self.currency = currency
       self.amount = amount

    #Your code starts HERE

     def __str__(self):
        return f"{self.amount} {self.currency}s"

     def __int__(self):
        return self.amount

     def __repr__(self):
        return f"{self.amount} {self.currency}s"

     def __add__(self, other):
        if isinstance(other, (int, float)):
            return Currency(self.currency, self.amount + other)
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        return NotImplemented

     def __iadd__(self, other):
        if isinstance(other, (int, float)):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        return self

    



# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1) 
print(int(c1)) 
print(repr(c1)) 
print(str(c1))
print(c1 + 5) 
print(c1 + c2)
# print(c1 + c3) got an error


# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that sum 2 numbers, and prints the result
# In a file named exercise_one.py import the function and call it to print the result

# (done)

# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import string
import random

def random_string(length):
    return ''.join(random.choices(string.ascii_letters, k=length))

print(random_string(5))


# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

from datetime import datetime

def current_date():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

print(current_date())


# Exercise 5 : Amount of time left until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

from datetime import datetime

def time_until_january_1st():
    now = datetime.now()
    january_1st = datetime(now.year + 1, 1, 1)
    delta = january_1st - now
    return delta

print(time_until_january_1st())


# Exercise 6 : Birthday and minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

from datetime import datetime

def minutes_lived(birthdate):
    birthdate = datetime.strptime(birthdate, "%Y-%m-%d")
    now = datetime.now()
    delta = now - birthdate
    return delta.total_seconds() / 60

print(minutes_lived("1990-01-01"))


# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

fake = Faker()

users = []

def add_user():
    users.append({
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    })

add_user()
add_user()
add_user()

print(users)

