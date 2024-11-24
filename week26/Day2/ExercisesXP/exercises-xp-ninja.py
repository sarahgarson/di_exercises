# Exercise 1 : Box of stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

def box_printer(*args):
    max_length = max(len(arg) for arg in args)
    print('*' * (max_length + 4))
    for arg in args:
        print(f'* {arg.ljust(max_length)} *')
    print('*' * (max_length + 4))

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")


# Exercise 2
# Analyse this code before executing it. What is the purpose of this code?

def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

# my answer: from the smallest to the biggest number, the code will sort the list in ascending order

# output: [17, 20, 26, 31, 44, 54, 55, 77, 93]