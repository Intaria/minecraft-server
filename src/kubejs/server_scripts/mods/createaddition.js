onEvent('recipes', event => {
    event.remove({output: 'createaddition:brass_rod'});
    event.remove({output: 'createaddition:copper_rod'});
    event.remove({output: 'createaddition:copper_wire'});
    event.remove({output: 'createaddition:diamond_grit'});
    event.remove({output: 'createaddition:diamond_grit_sandpaper'});
    event.remove({output: 'createaddition:iron_rod'});
    event.remove({output: 'createaddition:iron_wire'});
    event.remove({output: 'createaddition:gold_rod'});
    event.remove({output: 'createaddition:gold_wire'});
    event.remove({output: 'createaddition:furnace_burner'});
    event.remove({output: 'createaddition:rolling_mill'});
    event.remove({output: 'createaddition:spool'});
    event.remove({output: 'createaddition:tesla_coil'});
    event.remove({output: 'createaddition:zinc_sheet'});

    event.remove({output: 'createaddition:accumulator'});
    event.shaped('createaddition:accumulator', [
        'CSC',
        'GAG',
        'BSB'
    ], {
        C: 'createaddition:connector', S: 'createaddition:gold_spool', G: 'create:golden_sheet', A: 'create:copper_casing', B: 'createaddition:capacitor'
    });

    event.remove({output: 'createaddition:heater'});
    event.shaped('createaddition:heater', [
        ' C ',
        'SBS',
        'GAG'
    ], {
        C: 'createaddition:capacitor', S: 'createaddition:copper_spool', A: 'create:copper_sheet', G: 'minecraft:gold_ingot', B: 'minecraft:blaze_rod'
    });

    event.remove({output: 'createaddition:copper_spool'});
    event.shaped('2x createaddition:copper_spool', [
        'CSC',
        'SPS',
        'CSC'
    ], {
        S: 'minecraft:string', P: '#minecraft:planks',  C: 'create:copper_sheet'
    });

    event.remove({output: 'createaddition:gold_spool'});
    event.shaped('2x createaddition:gold_spool', [
        'GSG',
        'SPS',
        'GSG'
    ], {
        S: 'minecraft:string', P: '#minecraft:planks',  G: 'create:golden_sheet'
    });

    event.remove({output: 'createaddition:connector'});
    event.shapeless('createaddition:connector', [
        'create:copper_nugget', 
        'create:andesite_alloy', 
        'create:andesite_alloy', 
        '#forge:slimeballs'
    ]);

    event.remove({output: 'createaddition:alternator'});
    event.shaped('createaddition:alternator', [
        'ISI',
        'SAS',
        'ICI'
    ], {
        I: 'create:iron_sheet', S: 'createaddition:copper_spool', A: 'create:andesite_alloy', C: 'createaddition:capacitor'
    });

    event.remove({output: 'createaddition:electric_motor'});
    event.shaped('createaddition:electric_motor', [
        'GSG',
        'SAS',
        'GCG'
    ], {
        G: 'create:golden_sheet', S: 'createaddition:copper_spool', A: 'create:andesite_alloy', C: 'createaddition:capacitor'
    });

    event.remove({output: 'createaddition:capacitor'});
    event.shaped('createaddition:capacitor', [
        ' I ',
        'ICI',
        ' R '
    ], {
        I: 'create:iron_sheet', C: 'create:copper_sheet', R: 'minecraft:redstone_torch'
    });
})