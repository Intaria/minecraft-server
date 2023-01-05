ServerEvents.recipes(event => {   
    event.remove({output: 'domesticationinnovation:drum'});
    event.remove({output: 'domesticationinnovation:wayward_lantern'});
})

 LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("domesticationinnovation:drum");
});