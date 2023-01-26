ServerEvents.recipes(event => {   
    event.remove({output: 'beautify:rope'});

    event.remove({output: 'beautify:lamp_candleabra'});
    event.remove({output: 'beautify:lamp_candleabra_light_blue'});
    event.remove({output: 'beautify:lamp_candleabra_light_gray'});
    event.remove({output: 'beautify:lamp_candleabra_black'});
    event.remove({output: 'beautify:lamp_candleabra_blue'});
    event.remove({output: 'beautify:lamp_candleabra_brown'});
    event.remove({output: 'beautify:lamp_candleabra_cyan'});
    event.remove({output: 'beautify:lamp_candleabra_gray'});
    event.remove({output: 'beautify:lamp_candleabra_green'});
    event.remove({output: 'beautify:lamp_candleabra_lime'});
    event.remove({output: 'beautify:lamp_candleabra_magenta'});
    event.remove({output: 'beautify:lamp_candleabra_orange'});
    event.remove({output: 'beautify:lamp_candleabra_pink'});
    event.remove({output: 'beautify:lamp_candleabra_purple'});
    event.remove({output: 'beautify:lamp_candleabra_red'});
    event.remove({output: 'beautify:lamp_candleabra_white'});
    event.remove({output: 'beautify:lamp_candleabra_yellow'});

    event.remove({output: 'beautify:hanging_pot'});

    event.shaped('beautify:hanging_pot', [
        'R',
        'P',
    ], {
        R: 'supplementaries:rope', P: 'minecraft:flower_pot',
    })
})

 LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("beautify:rope");
});