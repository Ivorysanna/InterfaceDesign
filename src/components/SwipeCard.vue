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
            <p class="card-text">langer text damit ich schauen kann</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { register } from "swiper/element/bundle";
import { Ref, ref } from "vue";

register();

const cardsAlreadyViewed: Ref<number[]> = ref([]);

const onSlideChange = (_e: any) => {
    const newSlideIndex = _e.detail[0].activeIndex;
    console.info("new slide", newSlideIndex);
    cardsAlreadyViewed.value.push(newSlideIndex);
};

const spaceBetween = 10;
</script>

<style lang="scss" scoped>
.card-text {
    font-family: "Bambi Handwritten";
    color: #1d1d1f;
    font-size: 50px;
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
