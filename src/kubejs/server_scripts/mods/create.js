onEvent('recipes', event => {
    event.remove({output: 'create:andesite_funnel'});
    event.remove({output: 'create:andesite_tunnel'});
    event.remove({output: 'create:attribute_filter'});
    event.remove({output: 'create:belt_connector'});
    event.remove({output: 'create:blaze_burner'});
    event.remove({output: 'create:blaze_cake'});
    event.remove({output: 'create:blaze_cake_base'});
    event.remove({output: 'create:brass_hand'});
    event.remove({output: 'create:brass_funnel'});
    event.remove({output: 'create:brass_tunnel'});
    event.remove({output: 'create:crafter_slot_cover'});
    event.remove({output: 'create:deployer'});
    event.remove({output: 'create:empty_blaze_burner'});
    event.remove({output: 'create:empty_schematic'});
    event.remove({output: 'create:extendo_grip'});
    event.remove({output: 'create:haunted_bell'});
    event.remove({output: 'create:item_vault'});

    event.remove({output: 'create:linked_controller'});

    //Слишком много автоматизации
    event.remove({output: 'create:polished_rose_quartz'});
    event.remove({output: 'create:precision_mechanism'});
    event.remove({output: 'create:peculiar_bell'});
    event.remove({output: 'create:pulse_repeater'});
    event.remove({output: 'create:pulse_extender'});
    event.remove({output: 'create:redstone_link'});
    event.remove({output: 'create:red_sand_paper'});
    event.remove({output: 'create:rose_quartz'});
    event.remove({output: 'create:rotation_speed_controller'});
    event.remove({output: 'create:sand_paper'});
    event.remove({output: 'create:sequenced_gearshift'});
    event.remove({output: 'create:smart_chute'});
    event.remove({output: 'create:speedometer'});
    event.remove({output: 'create:stressometer'});


    event.remove({output: 'create:mechanical_arm'});
    event.remove({output: 'create:mechanical_drill'});
    event.remove({output: 'create:mechanical_crafter'});
    event.remove({output: 'create:mechanical_harvester'});
    event.remove({output: 'create:mechanical_plough'});
    event.remove({output: 'create:mechanical_saw'});
    event.remove({output: 'create:potato_cannon'});
    event.remove({output: 'create:schematicannon'});
    event.remove({output: 'create:schematic_and_quill'});
    event.remove({output: 'create:schematic_table'});
    event.remove({output: 'create:wand_of_symmetry'});
    event.remove({output: 'create:display_link'});
    event.remove({output: 'create:display_board'});

    //Временно
    event.remove({output: 'create:track'});
    event.remove({output: 'create:railway_casing'});
    event.remove({output: 'create:train_door'});
    event.remove({output: 'create:train_trapdoor'});
    event.remove({output: 'create:controls'});

    //Временно убираем, пока не придумаем, как внедрить роз кварц (мб из кварка)
    event.remove({output: 'create:rose_quartz_lamp'});
    event.remove({output: 'create:rose_quartz_block'});
    event.remove({output: 'create:rose_quartz_tiles'});
    event.remove({output: 'create:small_rose_quartz_tiles'});

    event.remove({output: 'create:cut_granite'});
    event.remove({output: 'create:cut_granite_stairs'});
    event.remove({output: 'create:cut_granite_slab'});
    event.remove({output: 'create:cut_granite_wall'});
    event.remove({output: 'create:polished_cut_granite'});
    event.remove({output: 'create:polished_cut_granite_stairs'});
    event.remove({output: 'create:polished_cut_granite_slab'});
    event.remove({output: 'create:polished_cut_granite_wall'});
    event.remove({output: 'create:cut_granite_bricks'});
    event.remove({output: 'create:cut_granite_brick_stairs'});
    event.remove({output: 'create:cut_granite_brick_slab'});
    event.remove({output: 'create:cut_granite_brick_wall'});
    event.remove({output: 'create:small_granite_bricks'});
    event.remove({output: 'create:small_granite_stairs'});
    event.remove({output: 'create:small_granite_slab'});
    event.remove({output: 'create:small_granite_wall'});
    event.remove({output: 'create:layered_granite'});
    event.remove({output: 'create:granite_pillar'});
    event.remove({output: 'create:cut_diorite'});
    event.remove({output: 'create:cut_diorite_stairs'});
    event.remove({output: 'create:cut_diorite_slab'});
    event.remove({output: 'create:cut_diorite_wall'});
    event.remove({output: 'create:polished_cut_diorite'});
    event.remove({output: 'create:polished_cut_diorite_stairs'});
    event.remove({output: 'create:polished_cut_diorite_slab'});
    event.remove({output: 'create:polished_cut_diorite_wall'});
    event.remove({output: 'create:cut_diorite_bricks'});
    event.remove({output: 'create:cut_diorite_brick_stairs'});
    event.remove({output: 'create:cut_diorite_brick_slab'});
    event.remove({output: 'create:cut_diorite_brick_wall'});
    event.remove({output: 'create:small_diorite_bricks'});
    event.remove({output: 'create:small_diorite_stairs'});
    event.remove({output: 'create:small_diorite_slab'});
    event.remove({output: 'create:small_diorite_wall'});
    event.remove({output: 'create:layered_diorite'});
    event.remove({output: 'create:diorite_pillar'});
    event.remove({output: 'create:cut_andesite'});
    event.remove({output: 'create:cut_andesite_stairs'});
    event.remove({output: 'create:cut_andesite_slab'});
    event.remove({output: 'create:cut_andesite_wall'});
    event.remove({output: 'create:polished_cut_andesite'});
    event.remove({output: 'create:polished_cut_andesite_stairs'});
    event.remove({output: 'create:polished_cut_andesite_slab'});
    event.remove({output: 'create:polished_cut_andesite_wall'});
    event.remove({output: 'create:cut_andesite_bricks'});
    event.remove({output: 'create:cut_andesite_brick_stairs'});
    event.remove({output: 'create:cut_andesite_brick_slab'});
    event.remove({output: 'create:cut_andesite_brick_wall'});
    event.remove({output: 'create:small_andesite_bricks'});
    event.remove({output: 'create:small_andesite_stairs'});
    event.remove({output: 'create:small_andesite_slab'});
    event.remove({output: 'create:small_andesite_wall'});
    event.remove({output: 'create:layered_andesite'});
    event.remove({output: 'create:andesite_pillar'});
    event.remove({output: 'create:cut_calcite'});
    event.remove({output: 'create:cut_calcite_stairs'});
    event.remove({output: 'create:cut_calcite_slab'});
    event.remove({output: 'create:cut_calcite_wall'});
    event.remove({output: 'create:polished_cut_calcite'});
    event.remove({output: 'create:polished_cut_calcite_stairs'});
    event.remove({output: 'create:polished_cut_calcite_slab'});
    event.remove({output: 'create:polished_cut_calcite_wall'});
    event.remove({output: 'create:cut_calcite_bricks'});
    event.remove({output: 'create:cut_calcite_brick_stairs'});
    event.remove({output: 'create:cut_calcite_brick_slab'});
    event.remove({output: 'create:cut_calcite_brick_wall'});
    event.remove({output: 'create:small_calcite_bricks'});
    event.remove({output: 'create:small_calcite_stairs'});
    event.remove({output: 'create:small_calcite_slab'});
    event.remove({output: 'create:small_calcite_wall'});
    event.remove({output: 'create:layered_calcite'});
    event.remove({output: 'create:calcite_pillar'});
    event.remove({output: 'create:cut_dripstone'});
    event.remove({output: 'create:cut_dripstone_stairs'});
    event.remove({output: 'create:cut_dripstone_slab'});
    event.remove({output: 'create:cut_dripstone_wall'});
    event.remove({output: 'create:polished_cut_dripstone'});
    event.remove({output: 'create:polished_cut_dripstone_stairs'});
    event.remove({output: 'create:polished_cut_dripstone_slab'});
    event.remove({output: 'create:polished_cut_dripstone_wall'});
    event.remove({output: 'create:cut_dripstone_bricks'});
    event.remove({output: 'create:cut_dripstone_brick_stairs'});
    event.remove({output: 'create:cut_dripstone_brick_slab'});
    event.remove({output: 'create:cut_dripstone_brick_wall'});
    event.remove({output: 'create:small_dripstone_bricks'});
    event.remove({output: 'create:small_dripstone_stairs'});
    event.remove({output: 'create:small_dripstone_slab'});
    event.remove({output: 'create:small_dripstone_wall'});
    event.remove({output: 'create:layered_dripstone'});
    event.remove({output: 'create:dripstone_pillar'});
    event.remove({output: 'create:cut_deepslate'});
    event.remove({output: 'create:cut_deepslate_stairs'});
    event.remove({output: 'create:cut_deepslate_slab'});
    event.remove({output: 'create:cut_deepslate_wall'});
    event.remove({output: 'create:polished_cut_deepslate'});
    event.remove({output: 'create:polished_cut_deepslate_stairs'});
    event.remove({output: 'create:polished_cut_deepslate_slab'});
    event.remove({output: 'create:polished_cut_deepslate_wall'});
    event.remove({output: 'create:cut_deepslate_bricks'});
    event.remove({output: 'create:cut_deepslate_brick_stairs'});
    event.remove({output: 'create:cut_deepslate_brick_slab'});
    event.remove({output: 'create:cut_deepslate_brick_wall'});
    event.remove({output: 'create:small_deepslate_bricks'});
    event.remove({output: 'create:small_deepslate_stairs'});
    event.remove({output: 'create:small_deepslate_slab'});
    event.remove({output: 'create:small_deepslate_wall'});
    event.remove({output: 'create:layered_deepslate'});
    event.remove({output: 'create:deepslate_pillar'});
    event.remove({output: 'create:cut_tuff'});
    event.remove({output: 'create:cut_tuff_stairs'});
    event.remove({output: 'create:cut_tuff_slab'});
    event.remove({output: 'create:cut_tuff_wall'});
    event.remove({output: 'create:polished_cut_tuff'});
    event.remove({output: 'create:polished_cut_tuff_stairs'});
    event.remove({output: 'create:polished_cut_tuff_slab'});
    event.remove({output: 'create:polished_cut_tuff_wall'});
    event.remove({output: 'create:cut_tuff_bricks'});
    event.remove({output: 'create:cut_tuff_brick_stairs'});
    event.remove({output: 'create:cut_tuff_brick_slab'});
    event.remove({output: 'create:cut_tuff_brick_wall'});
    event.remove({output: 'create:small_tuff_bricks'});
    event.remove({output: 'create:small_tuff_stairs'});
    event.remove({output: 'create:small_tuff_slab'});
    event.remove({output: 'create:small_tuff_wall'});
    event.remove({output: 'create:layered_tuff'});
    event.remove({output: 'create:tuff_pillar'});
    event.remove({output: 'create:small_granite_brick_stairs'});
    event.remove({output: 'create:small_granite_brick_slab'});
    event.remove({output: 'create:small_granite_brick_wall'});
    event.remove({output: 'create:small_diorite_brick_stairs'});
    event.remove({output: 'create:small_diorite_brick_slab'});
    event.remove({output: 'create:small_diorite_brick_wall'});
    event.remove({output: 'create:small_andesite_brick_stairs'});
    event.remove({output: 'create:small_andesite_brick_slab'});
    event.remove({output: 'create:small_andesite_brick_wall'});
    event.remove({output: 'create:small_calcite_brick_stairs'});
    event.remove({output: 'create:small_calcite_brick_slab'});
    event.remove({output: 'create:small_calcite_brick_wall'});
    event.remove({output: 'create:small_dripstone_brick_stairs'});
    event.remove({output: 'create:small_dripstone_brick_slab'});
    event.remove({output: 'create:small_dripstone_brick_wall'});
    event.remove({output: 'create:small_deepslate_brick_stairs'});
    event.remove({output: 'create:small_deepslate_brick_slab'});
    event.remove({output: 'create:small_deepslate_brick_wall'});
    event.remove({output: 'create:small_tuff_brick_stairs'});
    event.remove({output: 'create:small_tuff_brick_slab'});
    event.remove({output: 'create:small_tuff_brick_wall'});

    event.remove({output: 'create:brass_ingot'});
    event.shaped('create:brass_ingot', [
        'NNN',
        'NNN',
        'NNN'
    ], {
        N: 'create:brass_nugget'
    });
    event.shapeless('9x create:brass_ingot', [
        'create:brass_block'
    ]);
    event.shaped('2x create:brass_ingot', [
        'C',
        'Z',
        'C'
    ], {
        C: 'minecraft:copper_ingot', Z: 'create:zinc_ingot'
    });


    event.remove({output: 'create:crushing_wheel'});
    event.shaped('create:crushing_wheel', [
        'APA',
        'PSP',
        'APA'
    ], {
        A: 'create:andesite_alloy', P: '#minecraft:planks', S: '#forge:stone'
    });

    //временно, пока не вернули роз-кварц
    event.remove({output: 'create:electron_tube'});
    event.shaped('create:electron_tube', [
        'G',
        'R',
        'S'
    ], {
        G: 'minecraft:glass', R: 'minecraft:redstone_torch', S: 'create:iron_sheet'
    });

    //заменить в будущем на рецепт от пресса (просто прессовать)
    event.remove({output: 'create:sturdy_sheet'});
    event.shaped('create:sturdy_sheet', [
        ' P ',
        'PIP',
        ' P '
    ], {
        P: 'create:powdered_obsidian', I: 'create:iron_sheet'
    });

    
    //Временно убираем, пока не появится законченные поезда

    /*
    //заменить в будущем на рецепт от пресса (просто прессовать)
    event.shaped('create:railway_casing', [
        'S',
        'C',
    ], {
        S: 'create:sturdy_sheet', C: 'create:copper_casing'
    });
    */
})