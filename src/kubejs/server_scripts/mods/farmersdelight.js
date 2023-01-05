//МБ в будущем выпилить что-то еще
ServerEvents.recipes(event => {   
    event.remove({output: 'farmersdelight:rope'});
    event.remove({output: 'farmersdelight:safety_net'});
})

ServerEvents.recipes(event => {   
    event.shaped('farmersdelight:safety_net', [
        'RR ',
        'RR ',
        '   '
    ], {
        R: 'supplementaries:rope'
    });
})

onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("farmersdelight:rope");
});