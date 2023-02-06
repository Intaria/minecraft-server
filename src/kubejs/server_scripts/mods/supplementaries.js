ServerEvents.recipes(event => {   
    event.remove({output: 'supplementaries:quark/sign_post_azalea'});

    event.shaped('supplementaries:rope', [
        'S',
        'S',
        'S'
    ], {
        S: 'farmersdelight:straw'
    });
})