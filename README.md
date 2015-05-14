# Tic-tac-toe
Project Zero
Read Me:

Tic Tac Toe Time! Adventure time themed tic tac toe game.

Tic Tac Toe is a two player game, where the players are traditionally X & O but in this version X is Finn the human and O is the Jake the dog. The two players take turns in which they place their respective piece onto a spot on the 3X3 board. The objective of the game is to get 3 of your pieces in a row either vertically horizontally or diagonally.

Process:
Started by making up the board game just with basic grey boxes, initially placed an X & O by replacing the whichever grey box you clicked on with either a red or blue box depending on player X or player O. Which were css classes that didn’t get called upon until the player clicked on a square to place his marker.
Went on to design and theme it as an adventure time game. 
Used radio buttons to decided which character you wish to play and who goes first by selecting accordingly. 
First wrote the code for the tie/game over. Which was done by checking the length of the classes by 9, if 9 then all pieces had been played. 
Went on to write the code for the check win. Which was done by comparing the values of the board pieces with the values of the classes called by placing on a square. If they matched 3 in a row column or diagonal then alert Algebraic You won man! Then wrote a clear board function which reset the pieces of the board when you clicked the clear board button.
After the basic game was working pushed it up to github, and made a page hosted by github. 
Started on the bonus questions with the win counter. Which just adds to the amount of wins by 1 to who ever won the game. 
Also made a reset win function which reset the score back to nil all when the reset count button was pressed.
After that was all working attempted to write the AI which proved to be a lot more difficult than i thought. Ended up just writing the logic for it but couldn’t implement it easily with radio buttons so ended up making a HINT button which can also be used to play against the computer if you have your go and then press hint for the computers go, and that will tell you where to place your token.
Had many issues when writing this code. Took a lot of time, energy and will power!
