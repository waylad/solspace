## SOLSPACE METAVERSE

### Demo Video: https://youtu.be/481XiUEo1_w

### Try it out now on https://SolSpaceMetaverse.com

SOLSPACE is a space shooter game on Solana where you can pilot and upgrade your NFT Spaceship.

First, mint a basic spaceship to start with. Access the game and fight enemy ships. Harvest their parts. Upgrade your ship. Then sell your upgraded NFT.
![](https://solspacemetaverse.com/assets/screenshots/present-model.png)

We have created an NFT collection of 256 unique spaceships made of a combination of 4 different cabins, 4 wings, 4 engines, and 4 weapons.
![](https://solspacemetaverse.com/assets/screenshots/present-parts.png)
![](https://solspacemetaverse.com/assets/screenshots/present-possibilities.png)

SOLSPACE is a fully working game and available at https://SolSpaceMetaverse.com
![](https://solspacemetaverse.com/assets/screenshots/level-1.png)

Make sure you have installed Phantom and connected it to the Solana `Devnet`, then click "Connect your Wallet". Phantom will open to authorize the connection.
![](https://solspacemetaverse.com/assets/bg-home.png)

The game will then fetch all your spaceship NFTs from the smart contract. If you do not yet have an spaceship NFT, click "Mint New Ship" and Phantom will open to trigger the mint. You will receive a basic ship with entry-level weapons, wings, engine, and cabin. The ship will appear in your list of ships (if not refresh the page). Select that ship to access the game.
![](https://solspacemetaverse.com/assets/screenshots/select-ship-2.png)

The game is built with PhaserJS, a 2D Javascript game engine that allows us to pilot our ship and fire at enemies. Use the directional arrows to move the ship and press the space bar to fire. Try to kill the enemy ship, but be careful not to get hit. You have 30 health points then it's game over. Enemies have various health points depending on their levels. When the enemy is destroyed, it drops some loot. Move your ship over it to get it into your inventory.
![](https://solspacemetaverse.com/assets/screenshots/level-2.png)

Then open your inventory to see all the parts you have found. Drag and drop a ship part to its corresponding area on your ship to upgrade that part. A Solana transaction opens that will actually modify your NFT metadata and image on-chain with the new part. You can check Solscan to verify the transaction.
![](https://solspacemetaverse.com/assets/screenshots/inventory.png)

Each part are more or less powerfull. Some engines make you fater, some weapons deal more damages, ans so on.

Finally, once you have destroyed the enemy, you can move to the next area. Click the star icon to open the galaxy map. You can fly your ship to the stars in range. Click the one you want to move to and be ready to fight an harder enemy.
![](https://solspacemetaverse.com/assets/screenshots/map.png)

Move from one star to another until you reach the boss of the game, an insanely powerful ship with devastating weapons.
![](https://solspacemetaverse.com/assets/screenshots/level-4.png)

If you defeat the boss, you win SOLSPACE!

## How it's built

The GitHub repository is a mono-repo containing :

- The game, located in src/game, built with PhaserJS, a 2D javascript game engine, and Metaplex for creating and updating the NFTs.

- The images and metadata generator for the NFTs, located in src/generator, a custom script that takes the 4 cabins, 4 wings, 4 engines, and 4 weapons and mixes them together to create the 256 combinations of JSON metadata and png files.

## Wait, there is more!

SolSpace is not only a game, it's a metaverse! Players can generate their own adventures by editing the configuration file `levels.json` which lists the whole configuration of the game and levels. Create your own galaxy!

![](https://solspacemetaverse.com/assets/screenshots/code2.png)

## What's next?

We want to create more spaceship parts and generate a collection of 10,000 unique ships then sell that collection in order to finance the development of the game to build more enemies, worlds, a multiplayer mode, some storytelling, etc...

## Source code

If as judge you need access to the source code, please email me your github username at waylad42@gmail.com
