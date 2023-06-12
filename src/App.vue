<template>
    <header class="site-header">
        <TopNav />
    </header>

    <main class="main-content">
        <div class="progress-container">
            <div class="progress">
                <div class="progress-bar"></div>
            </div>
        </div>

        <div class="card-container">
            <div class="card">
                <img class="card-img-top" src="Bilder/book.png" alt="Book" />
                <div class="card-body">
                    <p class="card-text">Book</p>
                </div>
            </div>
        </div>

        <VueScrollPicker :options="['10KG', '20KG', '30KG']" />

        <swiper-container
            :slides-per-view="3"
            :space-between="spaceBetween"
            :centered-slides="true"
            :pagination="{
                hideOnClick: true,
            }"
            :breakpoints="{
                768: {
                    slidesPerView: 3,
                },
            }"
            @slidechange="onSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>

        <div class="background-style-container">
            <div class="position-bg">
                <div class="elliptical-bg"></div>
            </div>

            <div class="position-bg2">
                <div class="elliptical-bg"></div>
            </div>
        </div>
    </main>
</template>

<style src="vue-scroll-picker/lib/style.css"></style>

<script setup lang="ts">
import { VueScrollPicker } from "vue-scroll-picker";

import TopNav from "./sections/TopNav.vue";

import { register } from "swiper/element/bundle";

register();

const onSlideChange = (e) => {
    console.log("slide changed");
};

const spaceBetween = 10;
</script>
