ServerEvents.recipes(event => {   
    event.remove({output: 'create_enchantment_industry:disenchanter'});
    event.remove({output: 'create_enchantment_industry:hyper_experience_bottle'});
    event.remove({output: 'create_enchantment_industry:enchanting_guide'});
    event.remove({output: 'create_enchantment_industry:experience_rotor'});
    event.remove({output: 'create_enchantment_industry:hyper_experience'});

    event.shaped('create_enchantment_industry:disenchanter', [
        'F',
        'C',
    ], {
        F: 'create:filter', C: 'create:copper_casing',
    })
})
