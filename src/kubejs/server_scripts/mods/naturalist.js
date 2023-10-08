
//под вопросом:
//bluejay
//cardinal
//bear
//deer
//robin
//snail
//lion

ServerEvents.recipes(event => {   
    event.remove({output: 'naturalist:teddy_bear'});
    event.remove({output: 'naturalist:cooked_venison'});
    
    //TODO: добавить выпадение медвежей кожи из медведей и заменить рецепт
    event.shaped('naturalist:teddy_bear', [
        ' F ',
        'FWF',
        ' F '
    ], {
        W: '#minecraft:wool', F: 'alexsmobs:bison_fur'
    });
})