 LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("artifacts:eternal_steak")
        .removeLoot("artifacts:everlasting_beef")
        .removeLoot("artifacts:novelty_drinking_hat");
});