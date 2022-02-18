onEvent('recipes', event => {
    event.remove({output: 'mcwfences:oak_wired_fence'});
    event.remove({output: 'mcwfences:spruce_wired_fence'});
    event.remove({output: 'mcwfences:birch_wired_fence'});
    event.remove({output: 'mcwfences:jungle_wired_fence'});
    event.remove({output: 'mcwfences:dark_oak_wired_fence'});
    event.remove({output: 'mcwfences:crimson_wired_fence'});
    event.remove({output: 'mcwfences:warped_wired_fence'});
    event.remove({output: 'mcwfences:acacia_wired_fence'});
})