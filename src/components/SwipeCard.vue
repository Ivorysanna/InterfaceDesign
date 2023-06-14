<template>
    <div class="card">
        <swiper-container
            class="card-img-top"
            :slides-per-view="1"
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
            <swiper-slide>
                <img class="card-img-top" src="/Bilder/book.png" alt="Book" />
            </swiper-slide>
            <swiper-slide>
                <img class="card-img-top" src="/Bilder/book.png" alt="Book" />
            </swiper-slide>
            <swiper-slide>
                <img class="card-img-top" src="/Bilder/book.png" alt="Book" />
            </swiper-slide>
        </swiper-container>
        <div class="card-body">
            <p class="card-text">Book</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
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
</style>
