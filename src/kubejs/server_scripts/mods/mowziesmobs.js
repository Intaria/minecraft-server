onEvent('recipes', event => {
    event.remove({output: 'mowziesmobs:naga_fang_dagger'});

    //TODO: добавить больше рецептов?
    event.shaped('6x mowziesmobs:dart', [
        'F',
        'S',
    ], {
        F: 'mowziesmobs:naga_fang', S: 'minecraft:stick',
    });

    event.shaped('mowziesmobs:blowgun', [
        'SBS',
    ], {
        S: 'minecraft:string', B: 'minecraft:bamboo',
    });
})

onEvent("lootjs", (event) => {
    //TODO: Временное решение
    event
        .addEntityLootModifier("mowziesmobs:barako")
        .removeLoot("mowziesmobs:barako_mask");

    event
        .addEntityLootModifier("mowziesmobs:frostmaw")
        .removeLoot("mowziesmobs:ice_crystal")
        .addLoot("8x minecraft:diamond");

    event
        .addEntityLootModifier("mowziesmobs:wroughtnaut")
        .removeLoot("mowziesmobs:wrought_axe");
});