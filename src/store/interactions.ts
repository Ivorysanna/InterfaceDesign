import { defineStore } from "pinia";

export const useInteractionsStore = defineStore("interactions", {
    state: () => ({
        currentProgress: 10,
    }),
    actions: {
        incrementProgress() {
            this.currentProgress += 10;
        },
        decrementProgress() {
            this.currentProgress -= 10;
        },
    },
});
