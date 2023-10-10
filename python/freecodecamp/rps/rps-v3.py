# Game: Rock Paper Scissors v1
import random
import sys
import math
from enum import Enum


class RPS(Enum):
    ROCK = 1
    PAPER = 2
    SCISSORS = 3


def game():
    playerChoice = input('''
    Pick 1 - Rock
         2 - Paper
         3 - Scissors
    ''')
    if playerChoice not in ["1", "2", "3"]:
        print("You must enter 1, 2, or 3")
        return game()

    player = int(playerChoice)
    computer = int(random.choice("123"))

    print('')
    print('You chose ' + str(RPS(player)).replace('RPS.', ''))
    print('Python chose ' + str(RPS(computer)).replace('RPS.', ''))

    if player == 1 and computer == 3:
        print("🎉 You win!")
    elif player == 2 and computer == 1:
        print("🎉 You win!")
    elif player == 3 and computer == 2:
        print("🎉 You win!")
    elif player == computer:
        print("😲 Tie game!")
    else:
        print("🐍 Python wins!")

    while True:
        playAgain = input("\n Y for Yes and Q to quit\n")
        if playAgain.strip().lower() not in ["y", "q"]:
            continue
        else:
            break

    if playAgain.lower() == "y":
        return game()
    else:
        print("Thanks for playing")
        sys.exit("Bye")

game()
