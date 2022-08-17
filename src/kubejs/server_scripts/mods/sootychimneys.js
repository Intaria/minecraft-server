onEvent('recipes', event => {
    event.remove({output: 'sootychimneys:dirty_brick_chimney'});
    event.remove({output: 'sootychimneys:dirty_stone_chimney'});
    event.remove({output: 'sootychimneys:dirty_terracotta_chimney'});
    event.remove({output: 'sootychimneys:dirty_copper_chimney'});
})
