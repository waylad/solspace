export type ShipToken = {
    tokenId: number
    shipCode: string
    nft: any
  }
  
  export type Level = {
    starX: number
    starY: number
    background: string
    enemyShipCode: string
    enemySpeed: number
    enemyRateOfFire: number
  }
  
  export type State = {
    playerHealth: number
    enemyHealth: number
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