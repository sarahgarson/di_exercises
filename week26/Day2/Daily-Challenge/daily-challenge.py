# Instructions
# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!


# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

# 7	i	i
# T	s	x
# h	%	?
# i		#
# s	M	
# $	a	
# #	t	%
# ^	r	!


# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string.

# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message


def decrypt_matrix(matrix):
  message = ""
  for i in range(len(matrix[0])):
    for j in range(len(matrix)):
      if matrix[j][i].isalpha():
        message += matrix[j][i]
      elif message and message[-1] != " ":
        message += " "
  return message.strip()

matrix = [
  "7ii",
  "Tsx",
  "h%?",
  "i #",
  "sM ",
  "$a ",
  "#t%",
  "^r!"
]

print(decrypt_matrix(matrix))
