// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100002020306080808080808080806040202020203060808080808080808060402020303060505050808080805050506040407070501010105080805010101050707070501090909010505010909090105070705010909090901010909090901050707050109090909090909090909010507070701090909090b0a09090909010707070707010909090c0d0909090107070707070707010109090909010107070707070707070705010909010507070707070606060606060501010506060606060608080808080808050508080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808`, img`
. . . 2 . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . 2 . . . 
. . 2 2 2 2 . . . . 2 2 2 2 . . 
. . 2 . . . 2 . . 2 . . . 2 . . 
. 2 . . . . . 2 2 . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . 2 . . . 
. . . . . 2 . . . . 2 . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth,sprites.skillmap.islandTile4,sprites.dungeon.hazardLava1,sprites.jewels.jewel3,sprites.dungeon.floorDark3,sprites.dungeon.floorDark2,sprites.builtin.forestTiles10,sprites.castle.tileGrass2,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
