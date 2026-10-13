info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
})
info.onLifeZero(function () {
    game.splash("no entrenastes bien a tu ia")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    sprites.destroy(_2)
    sprites.destroy(_3)
    sprites.destroy(_4)
})
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
info.setLife(5)
info.startCountdown(120)
effects.starField.startScreenEffect(5000)
tiles.setCurrentTilemap(tilemap`nivel1`)
let _1 = sprites.create(assets.image`miImagen4`, SpriteKind.Food)
_2 = sprites.create(assets.image`miImagen2`, SpriteKind.Food)
_3 = sprites.create(assets.image`miImagen0`, SpriteKind.Food)
_4 = sprites.create(assets.image`miImagen5`, SpriteKind.Food)
let fran = sprites.create(assets.image`miImagen`, SpriteKind.Player)
let pront_malo = sprites.create(assets.image`miImagen1`, SpriteKind.Enemy)
controller.moveSprite(fran)
scene.cameraFollowSprite(fran)
fran.setPosition(128, 120)
game.onUpdateInterval(500, function () {
    _1 = sprites.create(assets.image`miImagen4`, SpriteKind.Food)
    _2 = sprites.create(assets.image`miImagen2`, SpriteKind.Food)
    _3 = sprites.create(assets.image`miImagen0`, SpriteKind.Food)
    _4 = sprites.create(assets.image`miImagen5`, SpriteKind.Food)
    _1.setPosition(randint(0, 160), randint(0, 120))
    _2.setPosition(randint(0, 160), randint(0, 120))
    _3.setPosition(randint(0, 160), randint(0, 120))
    _4.setPosition(randint(0, 160), randint(0, 120))
})
game.onUpdateInterval(500, function () {
    pront_malo = sprites.create(assets.image`miImagen1`, SpriteKind.Enemy)
    pront_malo.setPosition(randint(0, 20), randint(0, 20))
    pront_malo.follow(fran, 20)
})
