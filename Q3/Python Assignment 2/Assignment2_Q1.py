def add_two_numbers():
  """Adds two numbers provided by the user."""

  # Get the first number from the user
  num1_str = input("Enter the first number: ")

  # Convert the input to an integer
  num1 = int(num1_str)

  # Get the second number from the user
  num2_str = input("Enter the second number: ")

  # Convert the input to an integer
  num2 = int(num2_str)

  # Calculate the sum
  sum = num1 + num2

  # Print the result
  print("The sum of", num1, "and", num2, "is:", sum)

# Call the function to add two numbers
add_two_numbers()