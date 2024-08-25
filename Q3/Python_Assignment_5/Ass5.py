import random

NUM_ROUNDS = 5

def play_high_low():
    """Plays the High-Low game."""

    print("Welcome to the High-Low Game!")
    print("--------------------------------")

    score = 0

    for round_num in range(1, NUM_ROUNDS + 1):
        print(f"\nRound {round_num}")

        your_number = random.randint(1, 100)
        computer_number = random.randint(1, 100)

        print(f"Your number is {your_number}")

        while True:
            choice = input("Do you think your number is higher or lower than the computer's?: ").lower()
            if choice not in ("higher", "lower"):
                print("Please enter either higher or lower:")
            else:
                break

        if (your_number > computer_number and choice == "higher") or (your_number < computer_number and choice == "lower"):
            print("You were right! The computer's number was", computer_number)
            score += 1
        elif your_number == computer_number:
            print("Aww, that's incorrect. The computer's number was", computer_number)
        else:
            print("Aww, that's incorrect. The computer's number was", computer_number)

        print(f"Your score is now {score}")

    print("\nThanks for playing!")

    if score == NUM_ROUNDS:
        print("Wow! You played perfectly!")
    elif score >= NUM_ROUNDS // 2:
        print("Good job, you played really well!")
    else:
        print("Better luck next time!")

if __name__ == "__main__":
    play_high_low()