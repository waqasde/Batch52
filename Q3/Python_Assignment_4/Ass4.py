def is_prime(num):
  """Checks if a number is prime."""
  if num <= 1:
    return False
  if num <= 3:
    return True
  if num % 2 == 0 or num % 3 == 0:
    return False
  i = 5
  while i * i <= num:
    if num % i == 0 or num % (i + 2) == 0:
      return False
    i += 6
  return True

def main():
  name = input("Enter your name: ")
  num1 = int(input("Enter your first favorite number: "))
  num2 = int(input("Enter your second favorite number: "))
  num3 = int(input("Enter your third favorite number: "))

  print(f"Hello, {name}! Let's explore your favorite numbers:")

  numbers = [num1, num2, num3]
  parity = [(num, "even") if num % 2 == 0 else (num, "odd") for num in numbers]

  print("\nParity of your favorite numbers:")
  for num, parity in parity:
    print(f"The number {num} is {parity}.")

  print("\nYour favorite numbers and their squares:")
  for num in numbers:
    print(f"The number {num} and its square: ({num}, {num ** 2})")

  total = sum(numbers)
  print(f"\nAmazing! The sum of your favorite numbers is: {total}")

  if is_prime(total):
    print("Wow, {total} is a prime number!")
  else:
    print(f"{total} is not a prime number.")

if __name__ == "__main__":
  main()