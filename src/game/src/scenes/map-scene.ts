import { Level, state } from '../const/state'
import { levels } from '../const/levels.json'

export class Map extends Phaser.Scene {
  constructor() {
    super({
      key: 'Map',
    })
  }

  init(): void {}

  preload(): void {}

  create(): void {
    this.add.tileSprite(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2,
      this.sys.canvas.width,
      this.sys.canvas.height,
      'bg1',
    )

    this.add.tileSprite(
      levels[levels.length - 1].x,
      levels[levels.length - 1].y - 50,
      95,
      48,
      'bossLabel',
    )

    const currentLevel = levels[state.currentLevelIndex]
    // @ts-ignore
    levels.forEach((level: Level, index: number) => {
      const star = this.add.circle(level.x, level.y, 6, 0xffffff)
      const distance = Math.sqrt(Math.pow(level.x - currentLevel.x, 2) + Math.pow(level.y - currentLevel.y, 2))
      if (distance < 400) {
        var graphics = this.add.graphics()
        graphics.lineStyle(1, 0xffffff, 1)
        graphics.lineBetween(level.x, level.y, currentLevel.x, currentLevel.y)

        star.setInteractive({ cursor: 'pointer' })
        star.on('pointerover', () => star.setFillStyle(0x6155ff))
        star.on('pointerout', () => star.setFillStyle(0xffffff))
        star.on('pointerdown', () => {
          this.sound.add('clickSound').play()
          state.currentLevelIndex = index
          state.levelHistory.push(index)
          this.scene.start('Game')
        })
      }
    })

    let currentPosition = this.add.image(
      levels[state.currentLevelIndex].x,
      levels[state.currentLevelIndex].y,
      'currentPosition',
    )
    this.tweens.add({
      targets: currentPosition,
      angle: 360,
      yoyo: false,
      repeat: -1,
      // ease: 'Sine.easeInOut'
      duration: 10000,
    })

    let buttonBack = this.add.image(100, this.sys.canvas.height - 100, 'buttonBack')
    buttonBack.setInteractive({ cursor: 'pointer' })
    buttonBack.on('pointerover', () => buttonBack.setTexture('buttonBackHover'))
    buttonBack.on('pointerout', () => buttonBack.setTexture('buttonBack'))
    buttonBack.on('pointerdown', () => {
      this.sound.add('clickSound').play()
      this.scene.start('Game')
    })
  }

  update(): void {}
}
