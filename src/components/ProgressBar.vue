<template>
    <div class="progress-container">
        <progress class="progress" :value="interactionsStore.currentProgress" max="100"></progress>
    </div>
</template>

<script lang="ts" setup>
import { useInteractionsStore } from "@/store/interactions";

const interactionsStore = useInteractionsStore();
</script>

<style lang="scss" scoped>
.progress-container {
    display: flex;
    justify-content: center;
    z-index: 100;
}

.progress {
    margin-top: 100px;
    width: 80%;
    height: 20px;
    border: 3px solid #fff;
    background-color: #f2f2f2;
    border-radius: 25px;
}

.progress::-webkit-progress-value {
    background-color: #0066cc;
    border-radius: 25px;
}

.progress::-webkit-progress-bar {
    background-color: #333;
    border-radius: 25px;
}
</style>
