def calculate_ages():
  """Calculates and prints the ages of Anton, Beth, Chen, Drew, and Ethan."""

  # Assign Anton's age
  anton = 21

  # Calculate other ages based on the given information
  beth = anton + 6
  chen = beth + 20
  drew = chen + anton
  ethan = chen

  # Print the results
  print("Anton is", anton)
  print("Beth is", beth)
  print("Chen is", chen)
  print("Drew is", drew)
  print("Ethan is", ethan)

# Call the function
calculate_ages()