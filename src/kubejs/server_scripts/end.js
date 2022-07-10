onEvent('block.right_click', event => {
    if (event.block.id == 'minecraft:end_portal_frame' && event.item.id == 'minecraft:ender_eye'){
        event.cancel()
    }
})
