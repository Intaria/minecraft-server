//МБ в будущем выпилить что-то еще
ServerEvents.recipes(event => {   
    event.remove({output: 'farmersdelight:rope'});
    event.remove({output: 'farmersdelight:safety_net'});
    event.remove({output: 'farmersdelight:wheat_dough'});
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

 LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("farmersdelight:rope");
});