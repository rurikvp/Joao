enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const background = SpriteKind.create()
    export const jooj = SpriteKind.create()
    export const torch = SpriteKind.create()
    export const ataque = SpriteKind.create()
}
namespace ConnectionKind {
    export const tp = ConnectionKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    timer.throttle("action", 100000, function () {
        tiles.replaceAllTiles(assets.tile`myTile5`, assets.tile`myTile0`)
        tiles.replaceAllTiles(assets.tile`myTile4`, assets.tile`myTile0`)
        tiles.replaceAllTiles(assets.tile`myTile7`, assets.tile`myTile8`)
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile10`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile10`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
        timer.throttle("dialogo", 100000, function () {
            game.setDialogTextColor(15)
            game.setDialogCursor(img`
                . . . . 5 5 5 5 5 5 5 . . . . 
                . . 5 5 2 2 2 2 2 2 2 5 5 . . 
                . 5 5 2 2 2 9 9 9 2 2 2 5 5 . 
                . 5 2 2 2 9 9 2 9 9 2 2 2 5 . 
                . f 2 2 9 9 9 9 9 9 9 2 2 f . 
                . f 7 2 9 2 2 2 2 2 9 2 7 f . 
                . f 7 7 2 2 2 2 2 2 2 7 7 f . 
                . f 5 5 7 7 7 7 7 7 7 5 5 f . 
                f f 5 5 5 5 5 5 5 5 5 5 5 f f 
                f d f f 5 5 5 5 5 5 5 f f d f 
                f d d d f f f f f f f d d d f 
                f f a d d d d d d d d d a f f 
                f f f f f a a a a a f f f f f 
                f f a a a a a a a a a a a f f 
                . f f a a a a a a a a a f f . 
                . . . f f f f f f f f f . . . 
                `)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("é perigoso seguir em frente", DialogLayout.Bottom)
            game.showLongText("leve isto", DialogLayout.Bottom)
            game.splash("você pegou o item espada")
            espada = true
        })
    }
})
function animation2 () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (espada == true) {
        timer.throttle("attack", 700, function () {
            attack = sprites.create(img`
                . . . . 
                . . . . 
                . . . . 
                . . . . 
                `, SpriteKind.ataque)
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
                attack.setPosition(mySprite.x + 15, mySprite.y - 10)
                characterAnimations.setCharacterState(attack, characterAnimations.rule(Predicate.NotMoving))
                characterAnimations.runFrames(
                attack,
                [img`
                    . 1 1 . 1 1 . . 
                    1 . 1 1 . 1 1 1 
                    1 1 1 1 1 . . 1 
                    . 1 1 1 1 1 . 1 
                    . 1 1 1 1 1 1 1 
                    . . 1 . 1 1 1 . 
                    . 1 1 . 1 1 1 1 
                    . 1 1 1 1 1 1 1 
                    . . 1 1 . 1 . . 
                    . . 1 1 . 1 . . 
                    . . 1 . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    `,img`
                    . . 1 1 . . . . 
                    1 1 1 1 1 1 . . 
                    . 1 1 1 1 1 1 . 
                    . 1 1 1 1 1 1 . 
                    . . 1 1 1 1 1 . 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 . 1 . 
                    . . 1 1 1 1 1 . 
                    . . 1 1 1 1 1 . 
                    . . 1 1 1 1 1 . 
                    . 1 1 1 1 1 1 . 
                    . 1 . 1 1 1 1 . 
                    . 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 . . . 
                    1 1 1 1 . . . . 
                    1 1 1 . . . . . 
                    `,img`
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . 1 . 
                    . . . . . . 1 . 
                    . . . 1 . 1 1 . 
                    . . 1 1 1 1 1 . 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 1 1 1 
                    . . 1 1 1 1 1 1 
                    . 1 1 1 1 1 1 . 
                    . . 1 1 1 1 1 . 
                    1 1 1 1 1 1 . . 
                    1 1 . . 1 1 . . 
                    `],
                50,
                characterAnimations.rule(Predicate.NotMoving)
                )
                timer.after(350, function () {
                    attack.destroy()
                })
            } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
                attack.setPosition(mySprite.x - 15, mySprite.y - 10)
                characterAnimations.setCharacterState(attack, characterAnimations.rule(Predicate.NotMoving))
                characterAnimations.runFrames(
                attack,
                [img`
                    . . 1 1 . 1 1 . 
                    1 1 1 . 1 1 . 1 
                    1 . . 1 1 1 1 1 
                    1 . 1 1 1 1 1 . 
                    1 1 1 1 1 1 1 . 
                    . 1 1 1 . 1 . . 
                    1 1 1 1 . 1 1 . 
                    1 1 1 1 1 1 1 . 
                    . . 1 . 1 1 . . 
                    . . 1 . 1 1 . . 
                    . . . . . 1 . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    `,img`
                    . . . . 1 1 . . 
                    . . 1 1 1 1 1 1 
                    . 1 1 1 1 1 1 . 
                    . 1 1 1 1 1 1 . 
                    . 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    . 1 . 1 1 1 . . 
                    . 1 1 1 1 1 . . 
                    . 1 1 1 1 1 . . 
                    . 1 1 1 1 1 . . 
                    . 1 1 1 1 1 1 . 
                    . 1 1 1 1 . 1 . 
                    . . 1 1 1 1 1 . 
                    . . 1 1 1 1 1 1 
                    . . . 1 1 1 1 1 
                    . . . . 1 1 1 1 
                    . . . . . 1 1 1 
                    `,img`
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . 1 . . . . . . 
                    . 1 . . . . . . 
                    . 1 1 . 1 . . . 
                    . 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 . . 
                    . 1 1 1 1 1 1 . 
                    . 1 1 1 1 1 . . 
                    . . 1 1 1 1 1 1 
                    . . 1 1 . . 1 1 
                    `],
                50,
                characterAnimations.rule(Predicate.NotMoving)
                )
                timer.after(350, function () {
                    attack.destroy()
                })
            }
        })
    }
})
tiles.onMapLoaded(function (tilemap4) {
    tiles.coverAllTiles(tiles.util.door4, assets.tile`myTile1`)
    tiles.coverAllTiles(tiles.util.door3, assets.tile`myTile0`)
    tiles.coverAllTiles(tiles.util.door12, assets.tile`myTile0`)
    tiles.coverAllTiles(tiles.util.door9, assets.tile`myTile0`)
    tiles.coverAllTiles(assets.tile`myTile6`, assets.tile`myTile0`)
    tiles.coverAllTiles(assets.tile`myTile11`, assets.tile`myTile0`)
    tiles.coverAllTiles(tiles.util.door14, assets.tile`myTile0`)
    tiles.coverAllTiles(assets.tile`myTile12`, sprites.dungeon.darkGroundNorth)
    tiles.coverAllTiles(tiles.util.arrow1, assets.tile`myTile0`)
    tiles.coverAllTiles(tiles.util.arrow4, assets.tile`myTile0`)
    tiles.coverAllTiles(tiles.util.object4, assets.tile`myTile0`)
    tiles.placeOnRandomTile(mySprite, tiles.util.door4)
})
function criar_personagem () {
    mySprite = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 500
    scene.cameraFollowSprite(mySprite)
    animation2()
    statusbar = statusbars.create(50, 4, StatusBarKind.Health)
    statusbar.max = 100
    statusbar.value = 100
    statusbar.setColor(7, 2, 3)
    statusbar.setLabel("HP")
    statusbar.setPosition(scene.cameraProperty(CameraProperty.X) - 49, scene.cameraProperty(CameraProperty.Y) - 56)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy()
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.door9, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door2)
    tiles.placeOnRandomTile(mySprite, tiles.util.door14)
    espada = false
    cobra_set()
    croba.setVelocity(50, 0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile8`, assets.tile`myTile9`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.torch, function (sprite, otherSprite) {
    tocha.destroy(effects.fire, 100)
    lantern.startLanternEffect(mySprite)
    lantern.setLightBandWidth(30)
    lantern.setBreathingEnabled(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    timer.throttle("espinho damage", 1000, function () {
        statusbar.value += -30
    })
})
function cobra_set () {
    croba = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(croba, tiles.util.object4)
    characterAnimations.loopFrames(
    croba,
    [img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `,img`
        . . . . . . . c c c c c c . . . 
        . . . . . . c 6 7 7 7 7 6 c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . . . f 6 7 7 c 6 7 7 7 7 f . 
        . . c c c f 6 7 7 c c c c f . . 
        . c 7 7 7 c c f 7 7 7 2 6 c . . 
        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
        . . c c 6 6 7 1 1 1 1 1 6 c . . 
        . . . c c c c c c c c c c . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    croba,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(croba)
    statusbar.value = 75
    monstro = true
    croba.ay = 200
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.ataque, function (sprite, otherSprite) {
    timer.throttle("espinho damage", 1000, function () {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -25
    })
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.door3, function (sprite, location) {
    timer.throttle("activate", 100000, function () {
        tiles.loadConnectedMap(ConnectionKind.Door1)
        tiles.placeOnRandomTile(mySprite, tiles.util.door12)
        color.startFade(color.originalPalette, color.DIY, 1500)
        tocha = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 4 . . . 
            . . . . . . . . . . . . 4 4 . . 
            . . . . . . . . . . . 4 4 4 4 . 
            . . . . . . . . . . . 4 4 2 4 . 
            . . . . . . . . . . 4 4 2 2 4 4 
            . . . . . . . . . 4 4 2 2 2 4 4 
            . . e e e e e e 1 2 5 5 2 2 4 4 
            e e e e e e e e 1 4 5 5 2 4 4 4 
            `, SpriteKind.torch)
        tiles.placeOnRandomTile(tocha, assets.tile`myTile11`)
        lantern.startLanternEffect(tocha)
        lantern.setLightBandWidth(15)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("damage", 1000, function () {
        statusbar.value += -25
    })
})
let monstro = false
let statusbar2: StatusBarSprite = null
let tocha: Sprite = null
let croba: Sprite = null
let statusbar: StatusBarSprite = null
let attack: Sprite = null
let espada = false
let mySprite: Sprite = null
criar_personagem()
let tilemap1 = tiles.createMap(tilemap`level1`)
let tilemap2 = tiles.createMap(tilemap`level6`)
let tilemap3 = tiles.createMap(tilemap`level7`)
tiles.loadMap(tilemap1)
tiles.connectMapById(tilemap2, tilemap3, ConnectionKind.Door2)
tiles.connectMapById(tilemap1, tilemap2, ConnectionKind.Door1)
game.onUpdate(function () {
    if (tiles.getLoadedMap() == tilemap3) {
        if (characterAnimations.matchesRule(croba, characterAnimations.rule(Predicate.HittingWallRight))) {
            croba.setVelocity(-50, 0)
        } else if (characterAnimations.matchesRule(croba, characterAnimations.rule(Predicate.HittingWallLeft))) {
            croba.setVelocity(50, 0)
        }
    }
})
game.onUpdateInterval(500, function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile12`)) {
        timer.throttle("shake", 100000, function () {
            scene.cameraShake(6, 1000)
        })
    }
})
