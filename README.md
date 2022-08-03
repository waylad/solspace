## SOLSPACE METAVERSE

### Demo Video:

### Try it out now on https://SolSpaceMetaverse.com

SOLSPACE is a space shooter game on Solana with upgradable NFT Spaceships.

Your ship is an NFT that can be minted and upgraded on Solana. Mint a basic spaceship to start with. Pilot it in the game and fight enemy ships. Harvest their parts. Upgrade your ship. Then sell your upgraded NFT.
![](https://solspacemetaverse.com/assets/screenshots/present-model.png)

We have created an NFT collection of 256 unique spaceships made of a combination of 4 different cabins, 4 wings, 4 engines, and 4 weapons.
![](https://solspacemetaverse.com/assets/screenshots/present-parts.png)
![](https://solspacemetaverse.com/assets/screenshots/present-possibilities.png)

SOLSPACE is a fully working game and available at https://SolSpaceMetaverse.com
![](https://solspacemetaverse.com/assets/screenshots/level-2.png)

Make sure you have installed Phantom and connected it to the Solana `Devnet`. Click "Connect your Wallet". Phantom opens to authorize the connection.
![](https://solspacemetaverse.com/assets/screenshots/home.png)

The game will then fetch all your spaceship NFTs from the smart contract. If you do not yet have an spaceship NFT, click "Mint New Ship" and Phantom will open to trigger the mint. You will receive a basic ship with entry-level weapons, wings, engine, and cabin. The ship will appear in your list of ships (if not refresh the page). Select that ship to access the game.
![](https://solspacemetaverse.com/assets/screenshots/select-ship-2.png)

The game is built with PhaserJS, a 2D Javascript game engine that allows us to pilot our ship and fire at enemies. Use the directional arrows to move the ship and press the space bar to fire. Try to kill the enemy ship, but be careful not to get hit. You have 10 lives then it's game over. When the enemy is destroyed, it drops some loot. Move your ship over it to get it into your inventory.
![](https://solspacemetaverse.com/assets/screenshots/level-3.png)

Then open your inventory to see all the parts you have found. Drag and drop a ship part to its corresponding area on your ship to upgrade that part. An Solana transaction opens that will actually modify your NFT metadata and image on-chain with the new part. You can check Etherscan to verify the transaction.
![](https://solspacemetaverse.com/assets/screenshots/inventory.png)

Moreover, we have implemented a shop with its own ERC20 currency. Click the shop logo to open the shop. You can sell your parts by dragging them to the shop inventory, a transaction will open and you will earn 1 SpaceCoin per part you sell. On the other hand, you can buy new parts from the shop by dragging them to your inventory. You can then later equip them on your ship.
![](https://solspacemetaverse.com/assets/screenshots/shop.png)

Finally, once you have destroyed the enemy, you can move to the next area. Click the star icon to open the galaxy map. You can fly your ship to the stars in range. Click the one you want to move to and be ready to fight an harder enemy.
![](https://solspacemetaverse.com/assets/screenshots/map.png)

Move from one star to another until you reach the boss of the game, an insanely powerful ship with devastating weapons.
![](https://solspacemetaverse.com/assets/screenshots/level-4.png)

If you defeat the boss, you win SOLSPACE!

## How it's built
The GitHub repository is a mono-repo containing :

- The game, located in src/game, built with PhaserJS, a 2D javascript game engine

- The images and metadata generator for the NFTs, located in src/generator, a custom script that takes the 4 cabins, 4 wings, 4 engines, and 4 weapons and mixes them together to create the 256 combinations of JSON metadata and png files.

- The smart contracts for upgradable NFTs in src/contracts, which actually modifies an NFT metadata and image. 

## Wait, there is more!
SolSpace is not a single game, it is a metaverse! Players can generate their own galaxy by creating a configuration file levels.json which lists the whole configuration of the game and levels. Anyone can create their own adventure in Balrok! 

![](https://solspacemetaverse.com/assets/screenshots/code.png)

## What's next?
I want to create more parts to generate up to 10,000 unique ships and then sell the collection in order to finance the development of the game for more enemies, worlds, multiplayer, some storytelling, etc...


