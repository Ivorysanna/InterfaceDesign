<template>
    <div class="card">
        <swiper-container class="card-img-top" :slides-per-view="1" space-between="10" :centered-slides="true" :pagination="{
            hideOnClick: true,
        }" :breakpoints="{
    768: {
        slidesPerView: 3,
    },
}" @slidechange="onSlideChange">
            <swiper-slide v-for="(eachCard, eachIndex) in currentTimeLayerCards" class="card-slide"
                :key="eachCard.imageSrc">
                <img class="card-img-top" :src="eachCard.imageSrc" />
                <span class="card-debug">ID: {{ eachIndex }}; ZL: {{ interactionsStore.currentTimeLayerIndex }}</span>
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
import { Ref, computed, onMounted, ref } from "vue";
import { useInteractionsStore } from "@/store/interactions";

register();

const interactionsStore = useInteractionsStore();

interface CardData {
    imageSrc: string;
}

interface TimeLayer {
    id: number;
    cards: CardData[];
}

interface Composition {
    timeLayers: TimeLayer[];
}

const composition: Ref<Composition> = ref({
    timeLayers: [
        {
            id: 1,
            cards: [
                {
                    imageSrc: "/Bilder/book.png",
                },
                {
                    imageSrc: "/Bilder/bookFront.JPG",
                },
            ]
        },
        {
            id: 2,
            cards: [
                {
                    imageSrc: "/Bilder/book.png",
                },
                {
                    imageSrc: "/Bilder/bookFront.JPG",
                },
            ]
        },
    ]
});

const currentTimeLayer = computed(() => {
    return getTimeLayerWithId(interactionsStore.currentTimeLayerIndex);
})

const currentTimeLayerCards = computed(() => {
    console.debug("current time layer", currentTimeLayer.value);
    return currentTimeLayer.value?.cards || [];
})

function getTimeLayerWithId(timeLayerId: number): TimeLayer | null {
    return composition.value.timeLayers.find((eachTimeLayer) => eachTimeLayer.id == timeLayerId) || null;
}

onMounted(() => {
    // addViewedCardWithId(composition.value[0].id);
});

// const cardsAlreadyViewed: Ref<Set<number>> = ref(new Set<number>());

const onSlideChange = (_e: any) => {
    console.debug("slide change", _e);
    const newSlideIndex = _e.detail[0].activeIndex;
    console.info("new slide", newSlideIndex);

    // const currentCard = composition.value[newSlideIndex];
    // console.info("current card data", currentCard);

    // if (cardsAlreadyViewed.value.has(currentCard.id)) {
    //     console.debug("already viewed");
    //     return;
    // }

    // addViewedCardWithId(currentCard.id);
};

// function addViewedCardWithId(id: number) {
//     cardsAlreadyViewed.value.add(id);
//     interactionsStore.incrementProgress();
// }
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
    margin-top: 100px;
    height: 60vh;
}

.card-slide {
    .card-debug {
        position: absolute;
        bottom: 1em;
        right: 1em;
        padding: 5px;
        border-radius: 5px;
        background-color: #fff;
    }
}
</style>
