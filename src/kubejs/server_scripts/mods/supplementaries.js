onEvent('recipes', event => {
    event.remove({output: 'supplementaries:brass_lantern'});;

    event.shaped('supplementaries:rope', [
        ' S ',
        ' S ',
        ' S '
    ], {
        S: 'farmersdelight:straw'
    });
})