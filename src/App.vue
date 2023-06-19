<template>
    <ScreenFlasher />

    <header class="site-header">
        <TopNav />
    </header>

    <main class="main-content">
        <SwipeCard />
        <!-- <ProgressBar style="margin-bottom: 1rem" /> -->
        <TemporalPicker style="" />

        <div class="background-style-container">
            <!-- <div class="position-bg">
                <div class="elliptical-bg"></div>
            </div>

            <div class="position-bg2">
                <div class="elliptical-bg"></div>
            </div> -->
        </div>
    </main>
</template>

<script setup lang="ts">
// import ProgressBar from "./components/ProgressBar.vue";
import TemporalPicker from "./components/TemporalPicker.vue";
import TopNav from "./sections/TopNav.vue";
import SwipeCard from "./components/SwipeCard.vue";
import ScreenFlasher from "./components/ScreenFlasher.vue";
</script>

<style lang="scss" scoped>
.site-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.main-content {
    position: relative;
    width: 100%;
    height: 100%;
}

.position-bg {
    position: relative;
    /* set position in center */
    left: 140px;
    top: 20px;
    transform: translate(-50%, -50%);
}
.position-bg2 {
    position: relative;
    /* set position in center */
    left: 390px;
    top: 170px;
    transform: translate(-50%, -50%);
}

.elliptical-bg {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #0066cc, transparent);
    filter: blur(140px);
    z-index: -100;
}

.background-style-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -100;
    overflow: hidden;
}
</style>
