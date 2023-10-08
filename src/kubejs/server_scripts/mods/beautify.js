ServerEvents.recipes(event => {   
    event.remove({output: 'beautify:rope'});

    event.remove({output: 'beautify:hanging_pot'});

    event.shaped('beautify:hanging_pot', [
        'R',
        'P',
    ], {
        R: 'supplementaries:rope', P: 'minecraft:flower_pot',
    })
})

 LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("beautify:rope");
});