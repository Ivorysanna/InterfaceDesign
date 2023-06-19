<template>
    <Teleport to="body">
        <div class="screen-flasher" :class="{ flash: currentlyFlashing }"></div>
        <button class="debug-button" @click.prevent="flash">FLASH ME</button>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

// const interval = 2000;
const currentlyFlashing = ref(false);
const flashAudio = new Audio("/assets/audio/flash.mp3");

// flash the screen
const flash = () => {
    currentlyFlashing.value = true;
    setTimeout(() => {
        currentlyFlashing.value = false;
    }, 500);
};

</script>

<style scoped lang="scss">
@keyframes flash {
    0% {
        opacity: 0;
    }

    50% {
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
        animation: flash 0.27s ease-out;
    }
}

.debug-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 9999999;
}
</style>
