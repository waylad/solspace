require('dotenv').config()
import { Metaplex, TaskStatus, walletAdapterIdentity } from '@metaplex-foundation/js'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import { ShipToken } from 'state/stateTypes'

import { state } from '../state/state'
import { TLog } from './types'
import { getProvider } from './utils'

const NETWORK = clusterApiUrl('devnet')
const provider = getProvider()
const connection = new Connection(NETWORK)
const metaplex = new Metaplex(connection)

export type ConnectedMethods =
  | {
      name: string
      onClick: () => Promise<string>
    }
  | {
      name: string
      onClick: () => Promise<void>
    }

interface Props {
  publicKey: PublicKey | null
  connectedMethods: ConnectedMethods[]
  handleConnect: () => Promise<void>
  logs: TLog[]
  clearLogs: () => void
}

export const connectWallet = async () => {
  try {
    if (provider) {
      provider.on('connect', (publicKey: PublicKey) => {
        console.log({
          status: 'success',
          method: 'connect',
          message: `Connected to account ${publicKey.toBase58()}`,
        })
      })

      provider.on('disconnect', () => {
        console.log({
          status: 'warning',
          method: 'disconnect',
          message: '👋',
        })
      })

      provider.on('accountChanged', (publicKey: PublicKey | null) => {
        if (publicKey) {
          console.log({
            status: 'info',
            method: 'accountChanged',
            message: `Switched to account ${publicKey.toBase58()}`,
          })
        } else {
          console.log({
            status: 'info',
            method: 'accountChanged',
            message: 'Attempting to switch accounts.',
          })

          provider.connect().catch((error) => {
            console.log({
              status: 'error',
              method: 'accountChanged',
              message: `Failed to re-connect: ${error.message}`,
            })
          })
        }
      })

      const resp = await provider.connect()
      metaplex.use(walletAdapterIdentity(provider))
    }
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
          nft,
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

export const mintTokens = async () => {
}

export const burnTokens = async () => {}
