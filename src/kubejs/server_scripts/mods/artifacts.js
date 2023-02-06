ServerEvents.recipes(event => {   
    event.remove({output: 'artifacts:eternal_steak'});
})


LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("artifacts:umbrella")
        .removeLoot("artifacts:eternal_steak")
        .removeLoot("artifacts:everlasting_beef")
        .removeLoot("artifacts:novelty_drinking_hat")
        .removeLoot("artifacts:snorkel")
        .removeLoot("artifacts:scarf_of_invisibility")
        .removeLoot("artifacts:cloud_in_a_bottle")
        .removeLoot("artifacts:charm_of_sinking")
        .removeLoot("artifacts:obsidian_skull")
        .removeLoot("artifacts:universal_attractor")
        .removeLoot("artifacts:helium_flamingo")
        .removeLoot("artifacts:fire_gauntlet")
        .removeLoot("artifacts:vampiric_glove")
        .removeLoot("artifacts:whoopee_cushion");
});

LootJS.modifiers((event) => {  
    event
        .addEntityLootModifier("minecraft:entities/cow")
        .removeLoot("artifacts:eternal_steak")
        .removeLoot("artifacts:everlasting_beef");
});