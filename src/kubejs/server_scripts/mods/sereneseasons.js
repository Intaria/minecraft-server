onEvent('recipes', event => {
    event.remove({output: 'sereneseasons:calendar'});
    event.remove({output: 'sereneseasons:season_sensor'});

    event.shaped('sereneseasons:season_sensor', [
        "GGG",
        "QCQ",
        "SRS"
    ], {
        S: 'minecraft:cobblestone_slab', Q: '#forge:gems/quartz', G: '#forge:glass/colorless', C: 'minecraft:clock', R: 'minecraft:comparator'
    });
})
