# What you will create
# Create a TicTacToe game in python, where two users can play together.



# tic-tac-toe


# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

def display_board(board):
  for row in board:
    print(" | ".join(row))
    print("-" * 5)

def player_input(player):
  row = int(input(f"Player {player}, enter row number (0-2): "))
  col = int(input(f"Player {player}, enter column number (0-2): "))
  return row, col

def check_win(board):
  for row in board:
    if row[0] == row[1] == row[2] and row[0] != " ":
      return True
  for col in range(3):
    if board[0][col] == board[1][col] == board[2][col] and board[0][col] != " ":
      return True
  if board[0][0] == board[1][1] == board[2][2] and board[0][0] != " ":
    return True
  if board[0][2] == board[1][1] == board[2][0] and board[0][2] != " ":
    return True
  return False

def play():
  board = [[" " for _ in range(3)] for _ in range(3)]
  display_board(board)
  player = "X"
  for _ in range(9):
    row, col = player_input(player)
    if board[row][col] == " ":
      board[row][col] = player
      display_board(board)
      if check_win(board):
        print(f"Player {player} wins!")
        return
      player = "O" if player == "X" else "X"
  print("It's a tie!")

play()


#not quite sure I did it right, well need to check this one in class


# Hint
# To do this project, you basically need to create four functions:

# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.



# Tips : Consider the following:
# What functionality will need to accur every turn to make this program work?
# After contemplating the question above, think about splitting your code into smaller pieces (functions).
# Remember to follow the single responsibility principle! each function should do one thing and do it well!
