## Monster Hunter DB

This repo contains a database of monsters from MH3U, MH4U, MHGU MHST and MHW (plus Iceborne) Written in MongoDB and given in a json file. In its current state, it contains info on each monster from the games, with the following information (if it exists for the given monster)

* name (string) - the name of the monster
* type (string) - the monsters class
* games (array\<string\>) - an array of games the monster appeared in
* images (array\<string\>) - the icons for the monster (matches the games list and order)
* info (array\<string\>) - the in game info for the monster (matches the games list and order)
* subSpecies (array\<string\>) - a list of sub-species the monster has
* isLarge (bool) - if the monster if a major monster
* elements (array\<string\>) - any element the monster can use
* danger (int) - the danger rating of the monster
* ailments (array\<string\>) - a list of ailments the monster can cause
* weakness (array\<string\>) - a list of weaknesses the monster has

All icons are provided in the 'icons' folder that the DB references.
