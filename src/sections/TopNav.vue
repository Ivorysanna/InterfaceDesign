<template>
    <nav class="topNav" id="topNav" :class="{ expanded: isNavExpanded }">
        <img class="nav-bar-notch" src="Bilder/navBar.svg" alt="Logo" />
        <button class="arrowButton" id="arrowButton" @click.prevent="clickArrowButton">
            <img class="arrow" id="arrow" src="Bilder/pfeil.svg" alt="Logo" :class="{ rotated: isNavExpanded }" />
        </button>

        <div class="image-circle-container">
            <!-- <div class="circle-nav selected hover-effect">
                <img src="Bilder/bookSmall.JPG" />
            </div>
            <div class="circle-nav hover-effect">
                <img src="Bilder/bookSmall.JPG" />
            </div>
            <div class="circle-nav hover-effect">
                <img src="Bilder/bookSmall.JPG" />
            </div> -->

            <NavImage img-src="Bilder/bookSmall.JPG" :is-selected="true" />
            <NavImage img-src="Bilder/bookSmall.JPG" />
            <NavImage img-src="Bilder/bookSmall.JPG" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

import NavImage from "../components/NavImage.vue";

const isNavExpanded = ref(false);

function clickArrowButton() {
    console.debug("arrowButton clicked");
    isNavExpanded.value = !isNavExpanded.value;
}
</script>

<style lang="scss" scoped>
.arrowButton {
    position: absolute;
    left: calc(50% - 90px);
    bottom: -32px;
    width: 180px;
    height: 38px;
    padding: 0.4rem;
    // border: 1px solid red;
    border: none;
    background: none;
    border-radius: 0.9rem;

    .arrow {
        position: absolute;
        width: 2.5rem;
        left: calc(50% - 1.25rem);
        bottom: 9px;
        transition: transform 0.27s ease-in-out;

        &.rotated {
            transform: rotate(180deg);
        }
    }

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
}

.topNav {
    width: 100%;
    height: 30vh;
    z-index: 500;

    position: relative;

    // transition: top 0.27s ease-in-out;
    transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);

    background-color: #1d1d1f;
    border-bottom: 2px solid white;

    top: -25vh;
    &.expanded {
        top: -5vh;
    }
}

.image-circle-container {
    display: flex;
    justify-content: space-around;
    padding: 5rem 2rem 0 2rem;
}
</style>
