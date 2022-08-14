require('dotenv').config()
import { Metaplex, TaskStatus, walletAdapterIdentity } from '@metaplex-foundation/js'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'

import { ShipToken, state } from '../const/state'
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
      if(nft.name.indexOf("SolSpace Ship") >= 0) {
        state.ownedShips.push({
          tokenId: Math.floor(Math.random()*10000),
          shipCode: nft.name.replace("SolSpace Ship ", ""),
        })
      }
    })
    // const shipId1 = await spaceShipsContractWithSigner.tokenOfOwnerByIndex(address, 1)
    // const shipId2 = await spaceShipsContractWithSigner.tokenOfOwnerByIndex(address, 2)
    // const shipId3 = await spaceShipsContractWithSigner.tokenOfOwnerByIndex(address, 3)
    // const shipId4 = await spaceShipsContractWithSigner.tokenOfOwnerByIndex(address, 4)
    // const shipCode1 = await spaceShipsContractWithSigner._tokenToShipCode(shipId1)
    // const shipCode2 = await spaceShipsContractWithSigner._tokenToShipCode(shipId2)
    // const shipCode3 = await spaceShipsContractWithSigner._tokenToShipCode(shipId3)
    // const shipCode4 = await spaceShipsContractWithSigner._tokenToShipCode(shipId4)
    // state.ownedShips = [
    //   {
    //     tokenId: shipId1,
    //     shipCode: shipCode1,
    //   },
    //   {
    //     tokenId: shipId2,
    //     shipCode: shipCode2,
    //   },
    //   {
    //     tokenId: shipId3,
    //     shipCode: shipCode3,
    //   },
    //   {
    //     tokenId: shipId4,
    //     shipCode: shipCode4,
    //   },
    // ]
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
}

export const upgradeShip = async (ship: ShipToken) => {
  // const tx = await spaceShipsContractWithSigner.upgradeShip(ship.tokenId, ship.shipCode)
  // const confirmation = await provider.getTransactionReceipt(tx.hash)
  // console.log(confirmation)
}

export const getTokenBalance = async () => {
  // const spaceCoinsBalance = await spaceCoinsContractWithSigner.balanceOf(address)
  // state.spaceCoinsBalance = spaceCoinsBalance.toNumber()
  // console.log(spaceCoinsBalance.toNumber(), 'SpaceCoins')
}

export const mintTokens = async () => {
  // const tx = await spaceCoinsContractWithSigner.mint(address, 1000)
  // const confirmation = await provider.getTransactionReceipt(tx.hash)
  // console.log(confirmation)
}

export const burnTokens = async () => {
  // const tx = await spaceCoinsContractWithSigner.burn(1000)
  // const confirmation = await provider.getTransactionReceipt(tx.hash)
  // console.log(confirmation)
}
