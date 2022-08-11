import { state } from '../const/state'
import { IDropConstructor } from '../interfaces/drop.interface'

export class Drop extends Phaser.Physics.Arcade.Sprite {
  body: Phaser.Physics.Arcade.Body

  public getBody(): any {
    return this.body
  }

  constructor(aParams: IDropConstructor) {
    super(aParams.scene, aParams.x, aParams.y, aParams.texture)

    // init drop
    this.x = aParams.x
    this.y = aParams.y

    this.scene.physics.world.enable(this)
    this.body.allowGravity = false
    this.body.setSize(state.itemSize, state.itemSize)
    this.body.setOffset(state.itemSize / 2, state.itemSize / 2)

    this.scene.add.existing(this)
  }

  update(): void {}
}
