//Заменить рецепты соков
onEvent('recipes', event => {
    event.remove({output: 'toughasnails:dirty_water_bottle'});
    event.remove({output: 'toughasnails:dirty_water_canteen'});
    event.remove({output: 'toughasnails:empty_canteen'});
    event.remove({output: 'toughasnails:purified_water_bottle'});
    event.remove({output: 'toughasnails:purified_water_canteen'});
    event.remove({output: 'toughasnails:water_canteen'});
    event.remove({output: 'toughasnails:water_purifier'});
})