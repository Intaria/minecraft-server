onEvent('recipes', event => {
    event.remove({output: 'ba_bt:land_chest'});
    event.remove({output: 'ba_bt:land_golem_chest'});
    event.remove({output: 'ba_bt:ocean_chest'});
    event.remove({output: 'ba_bt:ocean_golem_chest'});

    event.remove({output: 'ba_bt:platinum_ingot'});
    event.shaped('ba_bt:platinum_ingot', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'ba_bt:platinum_shard'
    });
    event.shapeless('9x ba_bt:platinum_ingot', [
        'ba_bt:platinum_block'
    ]);
    event.shaped('ba_bt:platinum_ingot', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'ba_bt:platinum_shard'
    });


    event.shaped('ba_bt:platinum_sword', [
        'P',
        'P',
        'S'
    ], {
        P: 'ba_bt:platinum_ingot', S: 'minecraft:stick'
    });

    event.shaped('ba_bt:platinum_helmet', [
        'PPP',
        'P P'
    ], {
        P: 'ba_bt:platinum_ingot'
    });

    event.shaped('ba_bt:platinum_chestplate', [
        'P P',
        'PPP',
        'PPP'
    ], {
        P: 'ba_bt:platinum_ingot'
    });

    event.shaped('ba_bt:platinum_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: 'ba_bt:platinum_ingot'
    });

    event.shaped('ba_bt:platinum_boots', [
        'P P',
        'P P'
    ], {
        P: 'ba_bt:platinum_ingot'
    });
})