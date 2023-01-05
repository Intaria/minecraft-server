ServerEvents.recipes(event => {   
    event.remove({output: 'domesticationinnovation:drum'});
})

onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("domesticationinnovation:drum");
});