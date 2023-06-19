<template>
    <div class="card">
        <swiper-container class="card-img-top" :slides-per-view="1" space-between="10" :centered-slides="true"
            :pagination="false" @slidechange="onSlideChange">
            <swiper-slide v-for="(eachCard, eachIndex) in currentTimeLayerCards" class="card-slide"
                :key="eachCard.imageSrc">
                <img class="card-img-top" :src="`/InterfaceDesign/${eachCard.imageSrc}`" />
                <span class="card-debug">ID: {{ eachIndex }}; ZL: {{ interactionsStore.currentTimeLayerIndex }}</span>
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
import { Ref, computed, onMounted, ref, watch } from "vue";
import { useInteractionsStore } from "@/store/interactions";

register();
const interactionsStore = useInteractionsStore();

interface CardData {
    id: string;
    imageSrc: string;
}

interface TimeLayer {
    cards: CardData[];
}

interface Composition {
    timeLayers: TimeLayer[];
}

const composition: Ref<Composition> = ref({
    timeLayers: [
        {
            cards: [
                {
                    // a = Zeit, 01 = Position
                    id: "a_01",
                    imageSrc: "/Bilder/song/1song1.JPG",
                },
                {
                    id: "a_02",
                    imageSrc: "/Bilder/song/2song1.JPG",
                },
            ]
        },
        {
            cards: [
                {
                    id: "b_01",
                    imageSrc: "/Bilder/song/1song2.JPG",
                },
                {
                    id: "b_02",
                    imageSrc: "/Bilder/song/2song2.JPG",
                },
            ]
        },
    ]
});

const allCardsAmount = computed(() => {
    return composition.value.timeLayers.reduce((accumulator, eachTimeLayer) => {
        return accumulator + eachTimeLayer.cards.length;
    }, 0);
})

const currentTimeLayer = computed(() => {
    return composition.value.timeLayers[interactionsStore.currentTimeLayerIndex - 1];
})

const currentTimeLayerCards = computed(() => {
    console.debug("current time layer", currentTimeLayer.value);
    return currentTimeLayer.value?.cards || [];
})

function getCardFromTimeLayerWithIndex(timeLayerIndex: number, cardIndex: number): CardData | null {
    const timeLayer = composition.value.timeLayers[timeLayerIndex - 1];
    if (!timeLayer) {
        return null;
    }

    return timeLayer.cards[cardIndex];
}

onMounted(() => {
    const initialCard = getCardFromTimeLayerWithIndex(interactionsStore.currentTimeLayerIndex, lastSelectedSlideIndex.value);
    if (!initialCard) {
        console.error("no initial card");
        return;
    }
    addViewedCardWithId(initialCard.id);
});

const cardsIdsAlreadyViewed: Ref<Set<string>> = ref(new Set<string>());
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

function addViewedCardWithId(id: string) {
    if (cardsIdsAlreadyViewed.value.has(id)) {
        console.debug("already viewed");
        return;
    }

    cardsIdsAlreadyViewed.value.add(id);
    console.debug("cards already viewed", cardsIdsAlreadyViewed.value);

    if (cardsIdsAlreadyViewed.value.size == allCardsAmount.value) {
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
