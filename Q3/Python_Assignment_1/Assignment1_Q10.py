import math

def round_float(value, decimal_places=0):
  """Rounds a floating-point number to the specified number of decimal places.

  Args:
    value: The floating-point number to be rounded.
    decimal_places: The number of decimal places to round to. Defaults to 0.

  Returns:
    The rounded floating-point number.
  """

  return round(value, decimal_places)

value = 12.34567

# Round to the nearest integer
rounded_integer = round_float(value)

# Round to two decimal places
rounded_two_decimal = round_float(value, 2)

print("Rounded to nearest integer:", rounded_integer)
print("Rounded to two decimal places:", rounded_two_decimal)
