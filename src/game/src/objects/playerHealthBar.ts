export interface IPlayerHealthBarConstructor {
  scene: Phaser.Scene
  health: number
}

export class PlayerHealthBar extends Phaser.GameObjects.Container {
  private bar: Phaser.GameObjects.Graphics
  private value: number

  constructor({ scene, health }: IPlayerHealthBarConstructor) {
    super(scene, 100, 100)
    this.bar = new Phaser.GameObjects.Graphics(scene)

    var svg1 = scene.add.image(100, 100, 'enemy-healthbar-bar').setOrigin(0);

    this.value = health
    this.draw()
    scene.add.existing(this.bar)
  }

  public update(value: number): void {
    this.value = value
    this.draw()
  }

  public draw(): void {
    this.bar.clear()

    //  BG
    this.bar.fillStyle(0x000000)
    this.bar.fillRect(this.x, this.y, 80, 16)

    //  Health
    this.bar.fillStyle(0xffffff)
    this.bar.fillRect(this.x + 2, this.y + 2, 76, 12)

    if (this.value < 3) {
      this.bar.fillStyle(0xff0000)
    } else {
      this.bar.fillStyle(0x00ff00)
    }

    var d = Math.floor((76 / 100) * 10 * this.value)

    this.bar.fillRect(this.x + 2, this.y + 2, d, 12)
  }
}
