//Заменить рецепты соков
onEvent('recipes', event => {
    event.remove({output: 'paraglider:deku_leaf'});

    event.remove({output: 'paraglider:horned_statue'});
    event.remove({output: 'paraglider:goddess_statue'});
    event.remove({output: 'paraglider:rito_goddess_statue'});
    event.remove({output: 'paraglider:goron_goddess_statue'});
    event.remove({output: 'paraglider:kakariko_goddess_statue'});
})