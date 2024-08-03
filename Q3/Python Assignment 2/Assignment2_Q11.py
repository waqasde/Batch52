def get_list():
  """Continuously asks the user for values and adds them to a list until an empty input is given."""

  my_list = []
  while True:
    value = input("Enter a value: ")
    if not value:
      break
    my_list.append(value)

  print("Here's the list:", my_list)

# Call the function
get_list()
