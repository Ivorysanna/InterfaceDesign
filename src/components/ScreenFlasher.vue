<template>
    <Teleport to="body">
        <div class="screen-flasher" :class="{ flash: currentlyFlashing }"></div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import flashAudioFile from "@/assets/audio/flash.wav";
import { useInteractionsStore } from "@/store/interactions";

const interactionsStore = useInteractionsStore();

const currentlyFlashing = ref(false);
const flashAudio = new Audio(flashAudioFile);

// flash the screen
const flash = () => {
    currentlyFlashing.value = true;
    flashAudio.play();
    setTimeout(() => {
        currentlyFlashing.value = false;
    }, 1000);
};

watch(
    () => interactionsStore.viewedEverything,
    (newVal) => {
        if (newVal == true) {
            flash();
        }
    }
);
</script>

<style scoped lang="scss">
@keyframes flash {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.screen-flasher {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999999;
    background: none;
    background: #fff;
    opacity: 0;

    &.flash {
        animation: flash 0.37s linear;
    }
}
</style>
