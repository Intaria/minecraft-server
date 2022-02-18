//Заменить рецепты соков
onEvent('recipes', event => {
    event.remove({output: 'hunterillager:boomerang'});
})