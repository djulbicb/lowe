import random
from typing import List

# Vars
SUITS = ("Spades", "Hearts", "Clubs", "Diamonds")
RANKS = ("Ace", "2", "3", "4", "5", '6', '7', "8", "9", "10", "Jack", "Queen", "King")
NCARDS = 8

# Functions
def getCard(deckListIn):
    thisCard = deckListIn.pop()
    return thisCard
def getCardWithTypes(deckListIn: List[int]) -> int:
    thisCard = deckListIn.pop()
    return thisCard

def shuffle(deckListIn):
    deckListOut = deckListIn.copy()
    random.shuffle(deckListOut)
    return deckListOut

# Main code
print("Welcome to higher or lower")
print("Choose whether the next card is higher or lower")
print("Get it right 20 points; wrong lose 15 points.")
print("You have 50 points at start")

startingDeckList = []
score = 50
for suit in SUITS:
    print(suit)
    # for i, rank in enumerate(RANKS):
    for i, rank in enumerate(RANKS):
        print(i)
        cardDict = {"rank": rank, "suit": suit, "value": i + 1}
        startingDeckList.append(cardDict)

print(startingDeckList)
print(startingDeckList.__len__())

while True:
    print()
    gameDeckList = shuffle(startingDeckList)

    currentCard = getCard(gameDeckList)
    currentCardRank = currentCard["rank"]
    currentCardValue = currentCard["value"]
    currentCardSuit = currentCard["suit"]
    print("Starting card is:", currentCardRank + " of " + currentCardSuit)
    print()
    for cardNumber in range(0, NCARDS):
        answer = input("Will the next card be higher or lower:\n").casefold() # force lowercase
        print(answer)

        nextCard = getCard(gameDeckList)
        nextCardRank = nextCard["rank"]
        nextCardValue = nextCard["value"]
        nextCardSuit = nextCard["suit"]

        print("Next card is:", nextCardRank + " of " + nextCardSuit)

        if answer == "h" or answer == "higher":
            if nextCardValue > currentCardValue:
                print("You got this right, it was higher")
                score = score + 20
            else:
                print("Sorry, it was lower")
                score = score - 15
        elif answer == "l" or answer == "lower":
            if nextCardValue < currentCardValue:
                score = score + 20
                print("You got this right, it was lower")
            else:
                score = score - 15
                print("Sorry, it was not lower")
        print("Your score is:", score)
        print()
        currentCardRank = nextCardRank
        currentCardValue = nextCardValue

    goAgain = input("To play again, press Enter, or 'q' to quit:").casefold()
    if goAgain == "q":
        print("OK Bye")
        break

