onEvent('recipes', event => {
    event.remove({output: 'additional_lights:soul_wand'});

    event.remove({output: 'additional_lights:fire_for_standing_torch_s'});
    event.remove({output: 'additional_lights:fire_for_standing_torch_l'});
    event.remove({output: 'additional_lights:fire_for_fire_pit_s'});
    event.remove({output: 'additional_lights:fire_for_fire_pit_l'});
    event.remove({output: 'additional_lights:soul_fire_for_standing_torch_s'});
    event.remove({output: 'additional_lights:soul_fire_for_standing_torch_l'});
    event.remove({output: 'additional_lights:soul_fire_for_fire_pit_s'});
    event.remove({output: 'additional_lights:soul_fire_for_fire_pit_l'});
})
