import { State } from "./stateTypes";

export let state: State = {
  playerHealth: 10,
  enemyHealth: 0,
  spaceShipsContract: '',
  spaceCoinsContract: '',
  ownedShips: [],
  currentShip: {
    tokenId: 0,
    shipCode: '0000',
    nft: null
  },
  currentLevelIndex: 0,
  levelHistory: [],
  spaceCoinsBalance: 0,
  inventory: [],
  shopInventory: [
    'itemCabin0',
    'itemCabin1',
    'itemCabin2',
    'itemCabin3',
    'itemWeapon0',
    'itemWeapon1',
    'itemWeapon2',
    'itemWeapon3',
    'itemWing0',
    'itemWing1',
    'itemWing2',
    'itemWing3',
    'itemEngine0',
    'itemEngine1',
    'itemEngine2',
    'itemEngine3',
  ],
  shipSize: 60,
  itemSize: 50,
}