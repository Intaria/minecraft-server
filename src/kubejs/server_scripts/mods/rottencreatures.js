ServerEvents.recipes(event => {   
    event.remove({output: 'rottencreatures:corrupted_wart'});
    event.remove({output: 'rottencreatures:tnt_barrel'});
})


 LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("rottencreatures:dead_beard")
        .removeLoot("rottencreatures:tnt_barrel");
});