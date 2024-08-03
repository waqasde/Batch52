def fahrenheit_to_celsius():
  """Converts Fahrenheit temperature to Celsius."""

  fahrenheit = float(input("Enter temperature in Fahrenheit: "))
  celsius = (fahrenheit - 32) * 5.0 / 9.0
  print(f"Temperature: {fahrenheit}F = {celsius}C")

# Call the function
fahrenheit_to_celsius()
