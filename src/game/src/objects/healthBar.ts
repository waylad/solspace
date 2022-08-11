import { state } from '../const/state'
import { IHealthBarConstructor } from '../interfaces/healthBar.interface'

export class HealthBar extends Phaser.GameObjects.Container {
  private bar: Phaser.GameObjects.Graphics
  private value: number

  constructor(aParams: IHealthBarConstructor) {
    super(aParams.scene, aParams.x, aParams.y)

    this.bar = new Phaser.GameObjects.Graphics(aParams.scene)

    this.x = aParams.x
    this.y = aParams.y
    this.value = state.lives

    this.draw()

    aParams.scene.add.existing(this.bar)
  }

  public decrease(amount: number): boolean {
    this.value -= amount

    if (this.value < 0) {
      this.value = 0
    }

    this.draw()

    return this.value === 0
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

    var d = Math.floor(76 / 100 * 10 * this.value)

    this.bar.fillRect(this.x + 2, this.y + 2, d, 12)
  }
}
