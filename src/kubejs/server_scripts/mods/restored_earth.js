//Заменить рецепты соков
onEvent('recipes', event => {
    event.remove({output: 'restored_earth:journal'});
})