//МБ в будущем выпилить что-то еще
ServerEvents.recipes(event => {   
    event.remove({output: 'naturalized:natural_mud_bricks'});
    event.remove({output: 'naturalized:natural_mud_bricks_stairs'});
    event.remove({output: 'naturalized:natural_mud_bricks_slab'});
    event.remove({output: 'naturalized:wood_moss'});
    event.remove({output: 'naturalized:moss_bricks'});
    event.remove({output: 'naturalized:moss_bricks_stairs'});
    event.remove({output: 'naturalized:moss_bricks_slab'});
    event.remove({output: 'naturalized:christmas_tree'});

    event.remove({output: 'naturalized:hard_sand'});
    event.remove({output: 'naturalized:buttercup'});
    event.remove({output: 'naturalized:mushrooms'});
    event.remove({output: 'naturalized:red_mushroom_cluster'});
})
