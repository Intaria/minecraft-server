onEvent('block.right_click', event => {
    //Добавить проверку, что отменяется только если в руке глаз эндера
    if (event.block.id == 'minecraft:end_portal_frame'){
        event.cancel()
    }
})
