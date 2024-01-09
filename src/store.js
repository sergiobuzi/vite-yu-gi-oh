import { reactive } from "vue"

export const store = reactive({
    cardsList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0",
    SearchArchetype: "",
    apiArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypeList: [],
    typeArchetype: 'archetype',
});