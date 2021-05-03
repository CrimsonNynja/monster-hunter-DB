## Monster Hunter DB

This repo contains a database of monsters from MH3U, MH4U, MHGU, MHST and MHW (plus Iceborne), and MH Rise. It also contains all quests from MH rise (more to come in the future)

The data is provided in both a `.json` and `.ndjson` file, with the data sorted alphabetically on the monsters name.

In its current state, it contains info on each monster from the games, with the following information (if it exists for the given monster)

All icons are provided in the 'icons' folder that the DB references.

```js
{
    "_id": {
        "$oid": "" // the id of the monster
    },
    "name": "", // the name of the monster
    "type": "", // the type of the monster i.e. Brute Wyvern
    "isLarge": true, // if the monster is classed as Large
    "subSpecies": [
        "", //a list of all the sub-species this monster has
    ],
    "elements": [
        "" // any element the monster can have
    ],
    "ailments": [
        "", // any ailment the monster can inflict
    ],
    "weakness": [
        "" // any weakness the monster has
    ],
    "games": [
        {
            "game": "", // the game the monster appears in
            "image": "", // the icon for the monster in the game, see the files in the icon folder
            "info": "", // the info in the hunters notes for the game
            "danger": "" // the danger rating for the monster in the hunters notes
        },
    ]
},
```

Quest data structure

```js
{
    "_id": {
        "$oid": "" // the id of the quest
    },
    "name": "", //the quest title
    "client": "", // the quest client
    "description": "", // the information on the quest
    "map": "", //which map the quest is located in
    "isKey": true, // if the quest is needed to unlock the next HR
    "questType": "", // one of Village|Hub|Arena|Event
    "game": "", // which game the quest is from
    "difficulty": "", // the difficult of the quest 1, 7, G1 etc.
    "objective": "", // the key objective of the quest
    "targets": [
        "" // any key monsters which need to be dealt with to finish the quest
    ]
},
```
