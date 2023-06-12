<template>
    <div class="card-container">
        <div class="card">
            <img class="card-img-top" src="Bilder/book.png" alt="Book" />
            <div class="card-body">
                <p class="card-text">Book</p>
            </div>
        </div>
    </div>

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
</template>

<script setup lang="ts">
import { register } from "swiper/element/bundle";

register();

const onSlideChange = (_e: any) => {
    console.log("slide changed");
};

const spaceBetween = 10;
</script>

<style lang="scss" scoped>
.card-text {
    font-family: "Lucida Handwriting";
    color: #1d1d1f;
}

.card-body {
    background-color: #fbfbfd;
    padding-bottom: 40px;
}

/* align center card */
.card {
    margin: 0;
    float: none;
    margin-bottom: 10px;
}

.card-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
