ServerEvents.recipes(event => {   
    //Повторяющиеся блоки
    event.remove({output: 'vinery:wine_rack_3'});
    event.remove({output: 'vinery:wine_rack_4'});
    event.remove({output: 'vinery:wine_rack_5'});
    event.remove({output: 'vinery:storage_pot'});
    event.remove({output: 'vinery:window'});
    event.remove({output: 'vinery:coarse_dirt_slab'});
    event.remove({output: 'vinery:dirt_slab'});
    event.remove({output: 'vinery:grass_slab'});
    event.remove({output: 'vinery:apple_crate'});

    //TODO: проверить, что оно нигде не выпадает
    event.remove({output: 'vinery:gloves'});

    //Копия из фармер делайт
    event.remove({output: 'vinery:stove'});
    event.remove({output: 'vinery:cooking_pot'});
    event.remove({output: 'vinery:apple_pie'});
    event.remove({output: 'vinery:apple_pie_slice'});
})