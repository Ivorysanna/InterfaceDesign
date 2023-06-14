<template>
    <div class="progress-container">
        <div class="progress">
            <div class="progress-bar"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.progress-container {
    display: flex;
    justify-content: center;
    z-index: 100;
}

.progress {
    margin-top: 100px;
    width: 80%;
    height: 20px;
    border: 3px solid #fff;
    background-color: #f2f2f2;
    border-radius: 25px;
    overflow: hidden;
    background-color: transparent;
}

.progress-bar {
    width: 0;
    height: 100%;
    background-color: #0066cc;
    transition: width 0.5s ease;
}
</style>
