onEvent('recipes', event => {
    event.remove({output: 'beautify:rope'});
})

onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("beautify:rope");
});