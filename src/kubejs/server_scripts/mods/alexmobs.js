//МБ в будущем выпилить что-то еще
ServerEvents.recipes(event => {   
    event.remove({output: 'alexsmobs:animal_dictionary'});
    event.remove({output: 'alexsmobs:centipede_leggings'});
    event.remove({output: 'alexsmobs:chorus_on_a_stick'});
    event.remove({output: 'alexsmobs:rainbow_glass'});
    event.remove({output: 'alexsmobs:falconry_hood'});
    event.remove({output: 'alexsmobs:falconry_glove'});
    event.remove({output: 'alexsmobs:squid_grapple'});
    event.remove({output: 'alexsmobs:rocky_chestplate'});
    event.remove({output: 'alexsmobs:pupfish_locator'});
    event.remove({output: 'alexsmobs:stink_ray'});
    event.remove({output: 'alexsmobs:banana_slug_slime'});
    event.remove({output: 'alexsmobs:banana_slug_slime_block'});
    event.remove({output: 'alexsmobs:ghostly_pickaxe'});
    event.remove({output: 'alexsmobs:tendon_whip'});
    event.remove({output: 'alexsmobs:unsettling_kimono'});
    event.remove({output: 'alexsmobs:sculk_boomer'});

    //temporary:
    event.remove({output: 'alexsmobs:transmutation_table'});

    event.shaped('alexsmobs:sombrero', [
        ' S ',
        'CRC',
        'S S'
    ], {
        C: 'cottonly:ball', R: 'supplementaries:rope', S: 'farmersdelight:straw'
    });

    event.remove({output: 'alexsmobs:frontier_cap'});
    event.shaped('alexsmobs:frontier_cap', [
        ' F ',
        'FCF',
        '  T'
    ], {
        C: 'minecraft:leather_helmet', T: 'alexsmobs:raccoon_tail', F: 'alexsmobs:bison_fur'
    });

    event.shaped('alexsmobs:fedora', [
        ' L ',
        'LFL',
        'LRL'
    ], {
        R: 'supplementaries:rope', L: 'minecraft:leather', F: 'alexsmobs:bison_fur'
    });

    event.shaped('alexsmobs:falconry_glove', [
        ' L ',
        'LLL',
        ' F '
    ], {
        L: 'minecraft:leather', F: 'alexsmobs:bison_fur'
    });
})


LootJS.modifiers((event) => {  
    event
        .addEntityLootModifier("alexsmobs:underminer")
        .removeLoot("alexsmobs:ghostly_pickaxe");
});