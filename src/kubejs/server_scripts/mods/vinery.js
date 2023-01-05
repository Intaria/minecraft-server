ServerEvents.recipes(event => {   
    //Повторяющиеся блоки
    event.remove({output: 'vinery:chair'});
    event.remove({output: 'vinery:wine_rack_3'});
    event.remove({output: 'vinery:wine_rack_4'});
    event.remove({output: 'vinery:wine_rack_5'});
    event.remove({output: 'vinery:table'});
    event.remove({output: 'vinery:big_table'});
    event.remove({output: 'vinery:flower_box'});
    event.remove({output: 'vinery:flower_pot'});
    event.remove({output: 'vinery:barrel'});
    event.remove({output: 'vinery:storage_pot'});
    event.remove({output: 'vinery:window'});
    event.remove({output: 'vinery:kitchen_sink'});
    event.remove({output: 'vinery:loam'});
    event.remove({output: 'vinery:loam_stairs'});
    event.remove({output: 'vinery:loam_slab'});
    event.remove({output: 'vinery:coarse_dirt_slab'});
    event.remove({output: 'vinery:dirt_slab'});
    event.remove({output: 'vinery:grass_slab'});
    event.remove({output: 'vinery:stackable_log'});
    event.remove({output: 'vinery:faucet'});

    event.remove({output: 'vinery:vinemaker_apron'});
    event.remove({output: 'vinery:vinemaker_gloves'});
    event.remove({output: 'vinery:vinemaker_leggings'});
    event.remove({output: 'vinery:vinemaker_boots'});
    event.remove({output: 'vinery:straw_hat'});

    //TODO: проверить, что оно нигде не выпадает
    event.remove({output: 'vinery:gloves'});

    //Копия из фармер делайт
    event.remove({output: 'vinery:stove'});
    event.remove({output: 'vinery:cooking_pot'});
    event.remove({output: 'vinery:apple_pie'});
    event.remove({output: 'vinery:apple_pie_slice'});
})