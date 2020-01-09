## Monster Hunter DB

This repo contains a database of monsters from MH3U, MH4U, MHGU and MHW (plus Iceborne) Written in MongoDB and given in a json file. In its current state, it contains info on each monster from the games, with the following information (if it exists for the given monster)

* name - the name of the monster
* type - the monsters class
* games - an array of games the monster appeared in
* images - the icons for the monster (matches the games list and order)
* info - the in game info for the monster (matches the games list and order)
* subSpecies - a list of sub-species the monster has
* isLarge - if the monster if a major monster
* elements - any element the monster can use
* danger - the danger rating of the monster
* ailments - a list of ailments the monster can cause

All icons are provided in the 'icons' folder that the DB references.
