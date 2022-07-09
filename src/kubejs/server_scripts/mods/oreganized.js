//МБ в будущем выпилить что-то еще
onEvent('recipes', event => {
    event.remove({output: 'oreganized:silver_mirror'});
    event.remove({output: 'oreganized:bush_hammer'});

    event.remove({output: 'oreganized:electrum_ingot'});
    //Сам рецепт под вопросом
    event.shaped('oreganized:electrum_ingot', [
        'SSS',
        'LDL',
        'BBB'
    ], {
        S: 'oreganized:silver_ingot', B: 'create:brass_ingot', L: 'oreganized:lead_ingot', D: 'minecraft:diamond'
    });
    event.shaped('oreganized:electrum_ingot', [
        'NNN',
        'NNN',
        'NNN'
    ], {
        N: 'oreganized:electrum_nugget'
    });
    event.shapeless('9x oreganized:electrum_ingot', [
        'oreganized:electrum_block'
    ]);
})