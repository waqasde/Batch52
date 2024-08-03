def triangle_perimeter():
  """Calculates and prints the perimeter of a triangle."""

  side1 = float(input("What is the length of side 1? "))
  side2 = float(input("What is the length of side 2? "))
  side3 = float(input("What is the length of side 3? "))

  perimeter = side1 + side2 + side3
  print("The perimeter of the triangle is", perimeter)

# Call the function
triangle_perimeter()
