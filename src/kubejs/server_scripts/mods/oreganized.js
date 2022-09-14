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
    //Вернуть, когда можно что-то будет делать с жидкой ртутью через механизмы
    /*
    event.recipes.createMixing('oreganized:electrum_ingot', [
        'oreganized:silver_ingot',
        'oreganized:silver_ingot',
        'create:brass_ingot',
        'create:brass_ingot',
        'createaddition:diamond_grit',
        'oreganized:lead_ingot',
    ]).heated()
    */
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

    event.remove({output: 'oreganized:lead_ingot'});
    event.shaped('oreganized:lead_ingot', [
        'NNN',
        'NNN',
        'NNN'
    ], {
        N: 'oreganized:lead_nugget'
    });
    event.shapeless('9x oreganized:lead_ingot', [
        'oreganized:lead_block'
    ]);
})