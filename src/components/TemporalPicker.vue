<template>
    <div class="scroll-picker-container">
        <VueScrollPicker class="temporal-scroll-picker" :options="['1', '2', '3']" />
        <div class="blue-circle"></div>
    </div>
</template>

<script setup lang="ts">
import { VueScrollPicker } from "vue-scroll-picker";
</script>

<style src="vue-scroll-picker/lib/style.css"></style>

<style lang="scss">
.temporal-scroll-picker {
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
    }
}
</style>

<style scoped lang="scss">
.scroll-picker-container {
    width: 60px;
    margin: 0 auto;
    position: relative;
    font-size: 2em;

    .blue-circle {
        position: absolute;
        width: 55px;
        height: 55px;
        background-color: #0066cc;
        border-radius: 50%;
    }
}
</style>
