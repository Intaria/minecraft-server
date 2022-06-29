//МБ в будущем выпилить что-то еще
onEvent('recipes', event => {
    event.remove({output: 'redstonepen:control_box'});
    event.remove({output: 'redstonepen:pen'});
})
