// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`0a000a000205050101010101050703080c01010101010b06030b080101010101080603080d01010101010806030c08010101010108060308080101010101080603080b01010101010c0603080d0101010101080603080801010101010806040a0a01010101010a09`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.skillmap.islandTile0,sprites.skillmap.islandTile3,sprites.skillmap.islandTile6,sprites.skillmap.islandTile1,sprites.skillmap.islandTile5,sprites.skillmap.islandTile2,sprites.skillmap.islandTile4,sprites.skillmap.islandTile8,sprites.skillmap.islandTile7,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`0a000a0007070503010101020707070407030101010207070707070301010102070407070603010101020507050707030101010207070707070301010102070707070403010101020706070607030101010207070707070301010102060504070703010101020707`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.skillmap.islandTile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
