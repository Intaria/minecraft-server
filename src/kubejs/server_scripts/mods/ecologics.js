ServerEvents.recipes(event => {   
    event.remove({output: 'ecologics:pot'});
    event.remove({output: 'ecologics:crab_claw'});
    event.remove({output: 'ecologics:crab_meat'});
})