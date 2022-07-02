//МБ в будущем выпилить что-то еще
onEvent('recipes', event => {
    event.shaped('drinkbeer:lekas_call_bell', [
        ' N ',
        ' B ',
        ' S '
    ], {
        S: 'minecraft:sponge', B: 'minecraft:copper_ingot', N: 'create:copper_nugget'
    });

    /*
    event.shaped('drinkbeer:spice_blaze_paprika', [
        '   ',
        ' I ',
        ' B '
    ], {
        I: 'minecraft:sponge', B: 'minecraft:bowl'
    });
    */
})