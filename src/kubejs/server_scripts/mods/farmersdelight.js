//МБ в будущем выпилить что-то еще
onEvent('recipes', event => {
    event.remove({output: 'farmersdelight:rope'});
    event.remove({output: 'farmersdelight:safety_net'});
})

onEvent('recipes', event => {
    event.shaped('farmersdelight:safety_net', [
        'RR ',
        'RR ',
        '   '
    ], {
        R: 'supplementaries:rope'
    });
})