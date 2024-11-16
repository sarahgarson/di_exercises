# Instructions
# Write a function to compute 5/0 and use try/except to catch the exceptions.

def divide_by_zero():
    try:
        result = 5 / 0
    except ZeroDivisionError:
        print("You can't divide by zero!")

divide_by_zero()

