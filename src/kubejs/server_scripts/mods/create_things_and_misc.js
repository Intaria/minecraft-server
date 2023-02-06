ServerEvents.recipes(event => {   
    //Временно, пока не разберемся, нахера он
    event.remove({output: 'create_things_and_misc:blaze_ballon'});

    //Убрал, пока выглядит коряво
    event.remove({output: 'create_things_and_misc:speed_25'});
    event.remove({output: 'create_things_and_misc:speed_50'});
    event.remove({output: 'create_things_and_misc:speed_75'});
    event.remove({output: 'create_things_and_misc:speed_100'});

    event.remove({output: 'create_things_and_misc:radar'});
    event.remove({output: 'create_things_and_misc:glue_packaging'});
    event.remove({output: 'create_things_and_misc:porridge'});
    event.remove({output: 'create_things_and_misc:spout_gun'});
    event.remove({output: 'create_things_and_misc:spout_gun_water'});
    event.remove({output: 'create_things_and_misc:spout_gun_lava'});
    event.remove({output: 'create_things_and_misc:neon_tube'});
    event.remove({output: 'create_things_and_misc:brass_speaker'});
    event.remove({output: 'create_things_and_misc:powdered_obsidian_block'});
    event.remove({output: 'create_things_and_misc:magnifying_glass'});
    event.remove({output: 'create_things_and_misc:sticky_boots_boots'});
    event.remove({output: 'create_things_and_misc:sticky_launcher'});
    event.remove({output: 'create_things_and_misc:brass_sticky_launcher'});
    event.remove({output: 'create_things_and_misc:copper_scaffolding'});
    event.remove({output: 'create_things_and_misc:rose_quartz_sheet'});
    event.remove({output: 'create_things_and_misc:experience_sheet'});
    event.remove({output: 'create_things_and_misc:vibration_mechanism'});
    event.remove({output: 'create_things_and_misc:mending_rune'});

})
