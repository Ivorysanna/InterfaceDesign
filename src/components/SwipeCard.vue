<template>
    <div class="card">
        <swiper-container
            class="card-img-top"
            :slides-per-view="1"
            space-between="10"
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
            <swiper-slide v-for="eachCard in cards" :key="eachCard.id">
                <img class="card-img-top" :src="eachCard.image" />
            </swiper-slide>
        </swiper-container>
        <div class="card-body">
            <p class="card-text">Buch lesen</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { register } from "swiper/element/bundle";
import { Ref, onMounted, ref } from "vue";
import { useInteractionsStore } from "@/store/interactions";

register();

const interactionsStore = useInteractionsStore();

interface CardData {
    id: number;
    timeLayer: number;
    image: string;
}

const cards: Ref<CardData[]> = ref([
    {
        id: 0,
        timeLayer: 1,
        image: "/Bilder/book.png",
    },
    {
        id: 1,
        timeLayer: 1,
        image: "/Bilder/book.png",
    },
    {
        id: 2,
        timeLayer: 1,
        image: "/Bilder/book.png",
    },
    {
        id: 3,
        timeLayer: 1,
        image: "/Bilder/book.png",
    },
]);

onMounted(() => {
    addViewedCardWithId(cards.value[0].id);
});

const cardsAlreadyViewed: Ref<Set<number>> = ref(new Set<number>());

const onSlideChange = (_e: any) => {
    console.debug("slide change", _e);
    const newSlideIndex = _e.detail[0].activeIndex;
    console.info("new slide", newSlideIndex);

    const currentCard = cards.value[newSlideIndex];
    console.info("current card data", currentCard);

    if (cardsAlreadyViewed.value.has(currentCard.id)) {
        console.info("already viewed");
        return;
    }

    addViewedCardWithId(currentCard.id);
};

function addViewedCardWithId(id: number) {
    cardsAlreadyViewed.value.add(id);
    interactionsStore.incrementProgress();
}
</script>

<style lang="scss" scoped>
.card-text {
    font-family: "Bambi Handwritten";
    color: #1d1d1f;
    font-size: 40px;
    padding-left: 10px;
}

.card-body {
    background-color: #fbfbfd;
    padding-bottom: 10px;
}

/* align center card */
.card {
    margin: 0;
    float: none;
    margin-bottom: 10px;
}
</style>
