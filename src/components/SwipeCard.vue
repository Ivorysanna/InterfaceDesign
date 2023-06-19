<template>
    <div class="card">
        <swiper-container ref="swiperContainer" class="card-img-top" :slides-per-view="1" space-between="10"
            :centered-slides="true" :pagination="false" @slidechange="onSlideChange">
            <swiper-slide v-for="eachCard in currentTimeLayerCards" class="card-slide" :key="eachCard.imageSrc">
                <img class="card-img-top" :src="`/InterfaceDesign/${eachCard.imageSrc}`" />
            </swiper-slide>
        </swiper-container>
        <div class="card-body">
            <p class="card-text">Sing a song</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { register } from "swiper/element/bundle";
import { computed, onMounted, ref, watch, Ref } from "vue";
import { useInteractionsStore } from "@/store/interactions";
import { CardData } from "@/CardData/CardTypes";

register();
const interactionsStore = useInteractionsStore();

const swiperContainer: Ref<any> = ref(null);

onMounted(() => {
    const initialCard = getCardFromTimeLayerWithIndex(interactionsStore.currentTimeLayerIndex, lastSelectedSlideIndex.value);
    if (!initialCard) {
        console.error("no initial card");
        return;
    }
    addViewedCardWithId(initialCard.id);

    const swiper = swiperContainer.value?.swiper;
    if (!swiper) {
        console.error("no swiper");
        return;
    }

    // This is absolutely ugly, I'm sorry
    const savedViewedCards = new Set(interactionsStore.cardsIdsAlreadyViewed);

    setTimeout(() => {
        console.debug(swiper);
        swiper.slideTo(1, 1000, false);

        // after 1 sec
        setTimeout(() => {
            swiper.slideTo(0, 1000, false);
            interactionsStore.cardsIdsAlreadyViewed = savedViewedCards;
        }, 200);
    }, 500);
});

const lastSelectedSlideIndex = ref(0);

const onSlideChange = (_e: any) => {
    console.debug("slide change", _e);
    const newSlideIndex = _e.detail[0].activeIndex;
    lastSelectedSlideIndex.value = newSlideIndex;
    console.info("new slide", newSlideIndex);

    const currentCard = getCardFromTimeLayerWithIndex(interactionsStore.currentTimeLayerIndex, newSlideIndex);

    if (!currentCard) {
        console.error("no current card");
        return;
    }

    console.info("current card data", currentCard);
    addViewedCardWithId(currentCard.id);
};

const currentTimeLayer = computed(() => {
    return interactionsStore.currentComposition.timeLayers[interactionsStore.currentTimeLayerIndex - 1];
})

const currentTimeLayerCards = computed(() => {
    console.debug("current time layer", currentTimeLayer.value);
    return currentTimeLayer.value?.cards || [];
})

function getCardFromTimeLayerWithIndex(timeLayerIndex: number, cardIndex: number): CardData | null {
    const timeLayer = interactionsStore.currentComposition.timeLayers[timeLayerIndex - 1];
    if (!timeLayer) {
        return null;
    }

    return timeLayer.cards[cardIndex];
}

function addViewedCardWithId(id: string) {
    if (interactionsStore.cardsIdsAlreadyViewed.has(id)) {
        console.debug("already viewed");
        return;
    }

    interactionsStore.cardsIdsAlreadyViewed.add(id);
    console.debug("cards already viewed", interactionsStore.cardsIdsAlreadyViewed);

    if (interactionsStore.cardsIdsAlreadyViewed.size == interactionsStore.allCardsAmount) {
        console.debug("all cards viewed");

        setTimeout(() => {
            interactionsStore.viewedEverything = true;
        }, 1000);
    }
}

watch(
    () => interactionsStore.currentTimeLayerIndex,
    (newValue) => {
        const newCard = getCardFromTimeLayerWithIndex(newValue, lastSelectedSlideIndex.value);
        if (!newCard) {
            console.error("no new card found");
            return;
        }
        addViewedCardWithId(newCard.id);
    }
);
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
    margin-top: 70px;
    height: 60vh;
}
</style>
