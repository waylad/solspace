import { BootScene } from './scenes/boot-scene';
import { PreloaderScene } from './scenes/preloader-scene';
import { ConnectWallet } from './scenes/connect-wallet-scene';
import { GameOver } from './scenes/game-over-scene';
import { Game } from './scenes/game-scene';
import { Inventory } from './scenes/inventory-scene';
import { Shop } from './scenes/shop-scene';
import { SelectShip } from './scenes/select-ship-scene';
import { Map } from './scenes/map-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'SOLSPACE',
  url: 'https://solspacemetaverse.com',
  version: '3.0',
  width: 1600,
  height: 800,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [BootScene, PreloaderScene, ConnectWallet, SelectShip, Game, Inventory, Shop, GameOver, Map],
  input: {
    keyboard: true,
    mouse: true,
    touch: false,
    gamepad: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  backgroundColor: '#010022',
  render: { pixelArt: false, antialias: true }
};
