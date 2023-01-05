ServerEvents.recipes(event => {   
    event.remove({output: 'cataclysm:monstrous_helm'});

    event.remove({output: 'cataclysm:obsidian_explosion_trap_bricks'});
    event.remove({output: 'cataclysm:end_stone_teleport_trap_bricks'});
    event.remove({output: 'cataclysm:purpur_void_rune_trap_block'});
    event.remove({output: 'cataclysm:the_incinerator'});
    event.remove({output: 'cataclysm:ignitium_chestplate'});
    event.remove({output: 'cataclysm:ignitium_elytra_chestplate'});
})

//TODO: добавить новый лут
 LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:netherite_monstrosity")
        .removeLoot("cataclysm:infernal_forge");

    event
        .addEntityLootModifier("cataclysm:ender_golem")
        .removeLoot("cataclysm:void_core");

    event
        .addEntityLootModifier("cataclysm:ender_guardian")
        .removeLoot("cataclysm:gauntlet_of_guard");
});