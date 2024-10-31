scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    if (tiles.getTilesByType(assets.tile`myTile6`).length == 0) {
        mySprite2 = sprites.create(img`
            f f f f 5 5 5 5 5 5 5 f f f f 
            f f 5 5 5 5 5 5 5 5 5 5 5 f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 f f 5 5 5 f f 5 5 5 f 
            5 5 5 5 f f 5 5 5 f f 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 f f f f f f f f f 5 5 5 
            f 5 5 5 f f f f f f f 5 5 5 f 
            f 5 5 5 5 f f f f f 5 5 5 5 f 
            f f 5 5 5 5 5 5 5 5 5 5 5 f f 
            f f f f 5 5 5 5 5 5 5 f f f f 
            `, SpriteKind.Player)
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f 5 f f f f f f f f f f f 5 f f 
        f 5 5 f f f f f f f f f 5 5 f f 
        5 5 5 5 f f f f f f f 5 5 5 5 f 
        5 5 5 5 5 f f f f f 5 5 5 5 5 f 
        5 5 5 5 5 5 f f f 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f f f f 5 5 5 5 5 5 5 f f f f f 
        `,img`
        f f f f f f f f f f f f f f f f 
        f f f f 5 5 5 5 5 5 5 f f f f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f f f f 5 5 5 5 5 5 5 f f f f f 
        `],
    200,
    true
    )
    mySprite.setVelocity(0, -50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        f f f f f 5 5 5 5 5 5 5 f f f f 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f f f 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f 5 5 5 5 5 5 5 5 5 5 
        f f f f f f f 5 5 5 5 5 5 5 5 5 
        f f f f f f f f 5 5 5 5 5 5 5 5 
        f f f f f f f f f 5 5 5 5 5 5 5 
        f f f f f f f f 5 5 5 5 5 5 5 5 
        f f f f f f f 5 5 5 5 5 5 5 5 5 
        f f f f f f 5 5 5 5 5 5 5 5 5 5 
        f f f f f 5 5 5 5 5 5 5 5 5 5 f 
        f f f f 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f f f f 5 5 5 5 5 5 5 f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f 5 5 5 5 5 5 5 f f f f 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f f f f 5 5 5 5 5 5 5 f f f f 
        f f f f f f f f f f f f f f f f 
        `],
    200,
    true
    )
    mySprite.setVelocity(-50, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        f f f f f 5 5 5 5 5 5 5 f f f f 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 f f f 5 5 5 5 5 5 
        f 5 5 5 5 5 f f f f f 5 5 5 5 5 
        f 5 5 5 5 f f f f f f f 5 5 5 5 
        f f 5 5 f f f f f f f f f 5 5 f 
        f f 5 f f f f f f f f f f f 5 f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f f 5 5 5 5 5 5 5 f f f f 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f f f f 5 5 5 5 5 5 5 f f f f 
        f f f f f f f f f f f f f f f f 
        `],
    200,
    true
    )
    mySprite.setVelocity(0, 50)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        f f f f 5 5 5 5 5 5 5 f f f f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 f f f f 
        f 5 5 5 5 5 5 5 5 5 5 f f f f f 
        5 5 5 5 5 5 5 5 5 5 f f f f f f 
        5 5 5 5 5 5 5 5 5 f f f f f f f 
        5 5 5 5 5 5 5 5 f f f f f f f f 
        5 5 5 5 5 5 5 f f f f f f f f f 
        5 5 5 5 5 5 5 5 f f f f f f f f 
        5 5 5 5 5 5 5 5 5 f f f f f f f 
        5 5 5 5 5 5 5 5 5 5 f f f f f f 
        f 5 5 5 5 5 5 5 5 5 5 f f f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 f f f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f f f f 5 5 5 5 5 5 5 f f f f f 
        f f f f f f f f f f f f f f f f 
        `,img`
        f f f f 5 5 5 5 5 5 5 f f f f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 f f f 
        f f f f 5 5 5 5 5 5 5 f f f f f 
        f f f f f f f f f f f f f f f f 
        `],
    200,
    true
    )
    mySprite.setVelocity(50, 0)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let currentLevel = 0
mySprite = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 5 . . . . . . 
    5 5 5 5 5 5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 . . . . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 5 5 . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 5 . . . . . . 
    5 5 5 5 5 5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 . . . . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . . . . 
    5 5 5 5 5 5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 5 5 . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
mySprite.setVelocity(50, 0)
tiles.setCurrentTilemap(tilemap`Level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 3))
controller.moveSprite(mySprite, 50, 50)
