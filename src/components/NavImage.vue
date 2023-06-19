<template>
    <div class="circle-nav hover-effect" :class="{ selected: isSelected }">
        <img :src="`/InterfaceDesign/${props.src}`" />
    </div>
</template>

<script setup lang="ts">
export interface Props {
    src: string;
    isSelected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isSelected: false,
});
</script>

<style lang="scss" scoped>
.circle-nav {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: 5px solid grey;

    &.selected {
        border: 6px solid #0066cc;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.hover-effect {
    display: inline-block;
    transition: transform 0.2s ease-in-out;
}

.hover-effect:hover {
    transform: scale(1.1);
}
</style>
