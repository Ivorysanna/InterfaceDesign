<template>
    <div class="scroll-picker-container">
        <VueScrollPicker class="temporal-scroll-picker" :options="interactionsStore.selectableTimeLayers"
            v-model="interactionsStore.currentTimeLayerIndex" />
        <div class="blue-circle"></div>
        <!-- <img class="hourglass" src="/Bilder/hourglass.svg"> -->
    </div>
</template>

<script setup lang="ts">
import { VueScrollPicker } from "vue-scroll-picker";
import { useInteractionsStore } from "@/store/interactions";
import { watch } from "vue";

const interactionsStore = useInteractionsStore();

watch(
    () => interactionsStore.currentTimeLayerIndex,
    (newValue) => {
        console.debug(`New time layer selection: ${newValue}`);
    }
);
</script>

<style src="vue-scroll-picker/lib/style.css"></style>

<style lang="scss">
.temporal-scroll-picker {
    // Height of the scroller
    height: 2.5em;

    .vue-scroll-picker-layer-top {
        background: initial;
        background-color: #1d1d1fd1;
        border: none;
    }

    .vue-scroll-picker-layer-bottom {
        background: initial;
        background-color: #1d1d1fd1;
        border: none;
    }

    .vue-scroll-picker-item-selected {
        background: initial;
        color: #fbfbfd !important;
    }

    .vue-scroll-picker-item {
        background: initial;
        color: #fbfbfd !important;
        line-height: 1.4em;
    }
}
</style>

<style scoped lang="scss">
.scroll-picker-container {
    width: 60px;
    margin: 0 auto;
    position: relative;
    font-size: 2.5em;

    .blue-circle {
        position: absolute;
        z-index: -10;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70px;
        height: 70px;
        background-color: #0066cc;
        border-radius: 50%;
    }

    .hourglass {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -50px;
    }
}
</style>
