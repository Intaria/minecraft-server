//МБ в будущем выпилить что-то еще
onEvent('recipes', event => {
    event.remove({output: 'exoticbirds:bird_book'});
    event.remove({output: 'exoticbirds:nest'});
    event.remove({output: 'exoticbirds:phoenix_egg'});
    event.remove({output: 'exoticbirds:hummingbird_feeder'});
    event.remove({output: 'exoticbirds:egg_identifier'});

    event.shaped('exoticbirds:nest', [
        '   ',
        'PHP',
        ' P '
    ], {
        P: 'create:andesite_alloy', P: 'minecraft:stick', H: 'minecraft:wheat'
    });
})