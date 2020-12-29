# Build a turn-based board game in JavaScript - OpenClassrooms
Step 1: Generate the map

Start by randomly generating the game map. Each box can be either:

* Empty

* Unavailable (dimmed)

On the map, a limited number of weapons (up to 4) will be placed randomly and can be collected by players who pass through.

You should invent at least 4 types of weapons in the game, each with different damage inflicted (don't worry though, your choice of weapons doesn't need to be violent or come from the classic lineup of weapons. If you count a cupcake as a weapon, that's cool too)! The default weapon must inflict 10 points of damage. Each weapon has a name and associated visual.

The placement of the two players is also randomly on the map when the game loads. They should not touch (they can not be together).

Step 2: Movements

For each turn, a player can move from one to three boxes (horizontally or vertically) before ending their turn. They obviously can not pass through obstacles directly.

If a player passes over a box containing a weapon, they leave their current weapon on site and replace it with the new one.

Step 3: Fight!

If players cross over adjacent squares (horizontally or vertically), a battle begins.

During combat, the game works is as follows:

Each player plays in turn;

The player can choose to attack or defend against the next shot;

The damage depends on the player's weapon;

If the player chooses to defend themselves, they sustain 50% less damage than normal;

As soon as the life points of a player (initially 100) falls to 0, they lose. A message appears and the game is over.

Deliverables

For this project, you should code using object-oriented programming in Javascript.
