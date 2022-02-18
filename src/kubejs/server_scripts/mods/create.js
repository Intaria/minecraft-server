onEvent('recipes', event => {
    event.remove({output: 'create:adjustable_chain_gearshift'});
    event.remove({output: 'create:andesite_funnel'});
    event.remove({output: 'create:andesite_tunnel'});
    event.remove({output: 'create:attribute_filter'});
    event.remove({output: 'create:belt_connector'});
    event.remove({output: 'create:blaze_burner'});
    event.remove({output: 'create:blaze_cake'});
    event.remove({output: 'create:blaze_cake_base'});
    event.remove({output: 'create:brass_casing'});
    event.remove({output: 'create:brass_hand'});
    event.remove({output: 'create:brass_funnel'});
    event.remove({output: 'create:brass_tunnel'});
    event.remove({output: 'create:brass_sheet'});
    event.remove({output: 'create:brass_nugget'});
    event.remove({output: 'create:brass_ingot'});
    event.remove({output: 'create:crafter_slot_cover'});
    event.remove({output: 'create:crushed_zinc_ore'});
    event.remove({output: 'create:crushing_wheel'});
    event.remove({output: 'create:deployer'});
    event.remove({output: 'create:empty_blaze_burner'});
    event.remove({output: 'create:empty_schematic'});
    event.remove({output: 'create:extendo_grip'});
    event.remove({output: 'create:flywheel'});
    event.remove({output: 'create:furnace_engine'});
    event.remove({output: 'create:haunted_bell'});
    event.remove({output: 'create:item_vault'});
    event.remove({output: 'create:linked_controller'});
    event.remove({output: 'create:mechanical_arm'});
    event.remove({output: 'create:mechanical_drill'});
    event.remove({output: 'create:mechanical_crafter'});
    event.remove({output: 'create:mechanical_harvester'});
    event.remove({output: 'create:mechanical_plough'});
    event.remove({output: 'create:nixie_tube'});
    event.remove({output: 'create:mechanical_saw'});
    event.remove({output: 'create:polished_rose_quartz'});
    event.remove({output: 'create:potato_cannon'});
    event.remove({output: 'create:precision_mechanism'});
    event.remove({output: 'create:peculiar_bell'});
    event.remove({output: 'create:pulse_repeater'});
    event.remove({output: 'create:pulse_extender'});
    event.remove({output: 'create:redstone_link'});
    event.remove({output: 'create:red_sand_paper'});
    event.remove({output: 'create:rose_quartz'});
    event.remove({output: 'create:raw_zinc'});
    event.remove({output: 'create:rotation_speed_controller'});
    event.remove({output: 'create:sand_paper'});
    event.remove({output: 'create:sequenced_gearshift'});
    event.remove({output: 'create:schematicannon'});
    event.remove({output: 'create:schematic_and_quill'});
    event.remove({output: 'create:schematic_table'});
    event.remove({output: 'create:smart_chute'});
    event.remove({output: 'create:smart_fluid_pipe'});
    event.remove({output: 'create:speedometer'});
    event.remove({output: 'create:stressometer'});
    event.remove({output: 'create:wand_of_symmetry'});
    event.remove({output: 'create:zinc_nugget'});
    event.remove({output: 'create:zinc_ingot'});

    event.shaped('create:nixie_tube', [
        '   ',
        'TCT',
        '   '
    ], {
        T: 'create:electron_tube', C: 'create:copper_casing'
    });

    event.shaped('create:crushing_wheel', [
        'APA',
        'PSP',
        'APA'
    ], {
        A: 'create:andesite_alloy', P: '#minecraft:planks', S: '#forge:stone'
    });

    event.shaped('create:flywheel', [
        'PGP',
        'GAG',
        'PGP'
    ], {
        A: 'create:andesite_alloy', P: '#minecraft:planks', G: 'minecraft:gold_ingot'
    });

    event.shaped('create:furnace_engine', [
        'SSG',
        'SCI',
        'SSG'
    ], {
        C: 'create:copper_casing', G: 'minecraft:gold_ingot', I: 'minecraft:piston', S: 'create:golden_sheet'
    });
})