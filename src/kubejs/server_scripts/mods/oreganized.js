//МБ в будущем выпилить что-то еще
onEvent('recipes', event => {
    event.remove({output: 'oreganized:silver_mirror'});
    event.remove({output: 'oreganized:bush_hammer'});

    event.remove({output: 'oreganized:electrum_ingot'});
    //Сам рецепт под вопросом
    event.shaped('oreganized:electrum_ingot', [
        ' S ',
        'DLD',
        ' B '
    ], {
        S: 'oreganized:silver_ingot', B: 'create:brass_ingot', L: 'oreganized:molten_lead_bucket', D: 'createaddition:diamond_grit'
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