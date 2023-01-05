ServerEvents.recipes(event => {   
    event.remove({output: 'aquaculture:fish_fillet_cooked'});
    event.remove({output: 'aquaculture:fish_fillet_raw'});
    event.remove({output: 'aquaculture:sushi'});

    event.remove({output: 'aquaculture:wooden_fillet_knife'});
    event.remove({output: 'aquaculture:stone_fillet_knife'});
    event.remove({output: 'aquaculture:iron_fillet_knife'});
    event.remove({output: 'aquaculture:gold_fillet_knife'});
    event.remove({output: 'aquaculture:diamond_fillet_knife'});
    event.remove({output: 'aquaculture:neptunium_fillet_knife'});
    event.remove({output: 'aquaculture:neptunium_fishing_rod'});

    event.remove({output: 'aquaculture:neptunium_ingot'});
    event.remove({output: 'aquaculture:neptunium_nugget'});
})
