import { defineStore } from "pinia";

export const useInteractionsStore = defineStore("interactions", {
    state: () => ({
        currentProgress: 0,
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
