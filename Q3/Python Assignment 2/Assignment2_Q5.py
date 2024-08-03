def square_number():
  """Calculates and prints the square of a number."""

  number_str = input("Type a number to see its square: ")
  number = float(number_str)  # Convert input to a float for potential decimal values
  square = number * number
  print(f"{number} squared is {square}")

# Call the function
square_number()