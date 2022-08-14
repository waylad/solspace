export type ShipToken = {
  tokenId: number
  shipCode: string
  nft: any
}

export type Level = {
  x: number
  y: number
  background: string
  enemyCode: string
  speed: number
  rateOfFire: number
  boss?: boolean
}

export type State = {
  lives: number
  spaceShipsContract: string
  spaceCoinsContract: string
  ownedShips: ShipToken[]
  currentShip: ShipToken | null
  currentLevelIndex: number
  levelHistory: number[]
  spaceCoinsBalance: number
  inventory: string[]
  shopInventory: string[]
  shipSize: number
  itemSize: number
}

export let state: State = {
  lives: 10,
  spaceShipsContract: '0xAdb6D6558c2F93f81fEF617cEbAF332a00608b4e',
  spaceCoinsContract: '0xfb1E28Dc1B06edD11aabF4C2F060c3543E4Fc380',
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
