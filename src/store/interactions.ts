import { composition_01 } from "@/CardData/CardData";
import { Composition } from "@/CardData/CardTypes";
import { defineStore } from "pinia";

export const useInteractionsStore = defineStore("interactions", {
    state: () => ({
        currentTimeLayerIndex: 1,
        viewedEverything: false,
        currentComposition: composition_01,
        cardsIdsAlreadyViewed: new Set<string>(),
    }),
    actions: {
        loadNewComposition(newComposition: Composition) {
            this.currentComposition = newComposition;
            this.currentTimeLayerIndex = 1;
            this.viewedEverything = false;
            this.cardsIdsAlreadyViewed = new Set<string>();
        },
    },
    getters: {
        allCardsAmount(state) {
            return state.currentComposition.timeLayers.reduce((accumulator, eachTimeLayer) => {
                return accumulator + eachTimeLayer.cards.length;
            }, 0);
        },
        selectableTimeLayers(state): string[] {
            const amountOfTimeLayers = state.currentComposition.timeLayers.length;
            const selectableTimeLayers = [];
            for (let i = 1; i < amountOfTimeLayers + 1; i++) {
                selectableTimeLayers.push(i.toString());
            }
            return selectableTimeLayers;
        },
    },
});
