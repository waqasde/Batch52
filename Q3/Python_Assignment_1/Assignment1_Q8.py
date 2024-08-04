def convert_to_binary(num):
  """Converts an integer to its binary representation."""

  binary_representation = bin(num)
  return binary_representation

num = 45
result = convert_to_binary(num)
print("Binary representation :", result)
