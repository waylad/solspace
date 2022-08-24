import { Metaplex, walletAdapterIdentity } from '@metaplex-foundation/js'
import { clusterApiUrl, Connection } from '@solana/web3.js'
import { ShipToken } from 'state/stateTypes'

import { state } from '../state/state'
import { getProvider } from './utils'

let NETWORK: any = undefined
let provider: any = undefined
let connection: any = undefined
let metaplex: any = undefined

export const connectWallet = async () => {
  try {
    NETWORK = clusterApiUrl('devnet')
    provider = getProvider()
    connection = new Connection(NETWORK)
    metaplex = new Metaplex(connection)
    const resp = await provider.connect()
    metaplex.use(walletAdapterIdentity(provider))
  } catch (e: any) {
    console.log(e)
    // window.location.reload()
  }
}

export const getShips = async () => {
  try {
    const myNfts = await metaplex.nfts().findAllByOwner(metaplex.identity().publicKey).run()
    console.log(myNfts)
    myNfts.map((nft: any) => {
      if (nft.name.indexOf('SolSpace Ship') >= 0) {
        state.ownedShips.push({
          tokenId: Math.floor(Math.random() * 10000),
          shipCode: nft.name.replace('SolSpace Ship ', ''),
        })
      }
    })
    // state.ownedShips = JSON.parse(localStorage.getItem('ownedShips') || '[]')
    // console.log(state.ownedShips)
  } catch (e: any) {
    console.log(e)
    // window.location.reload()
  }
}

export const mintShip = async () => {
  const { nft } = await metaplex
    .nfts()
    .create({
      uri: 'https://solspacemetaverse.com/assets/ships/0000.json',
      name: 'SolSpace Ship 0000',
      symbol: 'SOLSPACE',
      sellerFeeBasisPoints: 500, // Represents 5.00%.
    })
    .run()
  console.log(nft)

  // state.ownedShips = JSON.parse(localStorage.getItem('ownedShips') || '[]')
  // state.ownedShips.push({
  //   tokenId: Math.floor(Math.random() * 10000),
  //   shipCode: nft.name.replace('SolSpace Ship ', ''),
  //   nft,
  // })
  // localStorage.setItem('ownedShips', JSON.stringify(state.ownedShips))
}

export const upgradeShip = async (ship: ShipToken) => {
  // Not working for some reason....
  // const { nft: updatedNft } = await metaplex
  //   .nfts()
  //   .update(ship.nft, {
  //     uri: `https://solspacemetaverse.com/assets/ships/${ship.shipCode}.json`,
  //     name: `SolSpace Ship ${ship.shipCode}`,
  //     symbol: 'SOLSPACE',
  //     sellerFeeBasisPoints: 500, // Represents 5.00%.
  //   })
  //   .run()
  // console.log(updatedNft)
  const { nft } = await metaplex
    .nfts()
    .create({
      uri: `https://solspacemetaverse.com/assets/ships/${ship.shipCode}.json`,
      name: `SolSpace Ship ${ship.shipCode}`,
      symbol: 'SOLSPACE',
      sellerFeeBasisPoints: 500, // Represents 5.00%.
    })
    .run()
}

export const getTokenBalance = async () => {}

export const mintTokens = async () => {}

export const burnTokens = async () => {}
