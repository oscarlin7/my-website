<script setup>
import { ref, watch } from 'vue'
import { useThemeVars } from 'naive-ui'
import { changeColor } from 'seemly'

const themeVars = useThemeVars();

const light = ref(false);

const distance = ref(0);

const percentage = ref(100);

const duration = ref(5000);

const countdownRef = ref(null);

const lightColor = ref("#ff0000")

const renderCountdown = ({
    hours,
    minutes,
    seconds
}) => {
    return `${String(seconds).padStart(2, "0")}`;
}

watch(light, newVal => {
    if (newVal) {
        lightColor.value = "#04ff00";
    } else {
        lightColor.value = "#ff0000";
    }
})

function handleFinish() {
    duration.value = 3000;
    light.value = !light.value;
    countdownRef.value.reset()
}

function findClosestRecord() {

}

function correctTime() {

}

function handleProgress() {

}

function calculateDistanceAndPercentage() {
    const walkingSpeed = 2.4; // 平均步行速度，单位：米/秒
    const crosswalkLength = 40; // 人行横道长度，单位：米
}

function readJson() {

}
</script>

<template>
    <div class="container">
        <n-flex :align="'center'">
            <div class="iconContainer">
                <n-icon color="#0068EF" :size="24">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 384 512">
                        <path
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80s-80 35.817-80 80s35.817 80 80 80z"
                            fill="currentColor"></path>
                    </svg>
                </n-icon>
            </div>
            <div>
                <div style="font-size: 18px;"><b>Xiamen</b></div>
                <div>思明北路与湖滨西路汇集口红绿灯</div>
            </div>
        </n-flex>
        <n-flex class="trafficLight__contianer" :align="'center'" :justify="'center'">
            <div>
                <div style="position: relative; margin-bottom: 12px">
                    <n-image preview-disabled :width="280"
                        src="./my-website/GreenLightGo/app/traffic-light-pedestrian.png" />
                    <div :class="['countdown', !light ? 'red-glowing-text' : 'green-glowing-text']"
                        :style="{ color: lightColor }">
                        <n-countdown ref="countdownRef" @finish="handleFinish" :duration="duration"
                            :render="renderCountdown">
                        </n-countdown>
                    </div>
                    <div class="icons">
                        <n-icon v-if="!light" :color="lightColor" class="standingIcon" :size="96">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512">
                                <circle cx="256" cy="56" r="56" fill="currentColor"></circle>
                                <path
                                    d="M304 128h-96a64.19 64.19 0 0 0-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 184 300v-99.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8V489a23 23 0 0 0 23 23a23 23 0 0 0 23-23V346.34a10.24 10.24 0 0 1 9.33-10.34A10 10 0 0 1 266 346v143a23 23 0 0 0 23 23a23 23 0 0 0 23-23V200.27a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 368 300V192a64.19 64.19 0 0 0-64-64z"
                                    fill="currentColor"></path>
                            </svg>
                        </n-icon>
                        <n-icon v-else :color="'#04ff00'" class="walkingIcon" :size="96">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512">
                                <path
                                    d="M312.55 479.9l-56.42-114l-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="32" fill="currentColor"></path>
                                <path d="M127.38 291.78v-74.07s37-74.07 74.07-74.07" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                                <path
                                    d="M368.09 291.78a18.49 18.49 0 0 1-10.26-3.11L297.7 250a21.18 21.18 0 0 1-9.7-17.79v-23.7a5.65 5.65 0 0 1 8.69-4.77l81.65 54.11a18.52 18.52 0 0 1-10.29 33.93z"
                                    fill="currentColor"></path>
                                <path
                                    d="M171.91 493.47a18.5 18.5 0 0 1-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0 1 10.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09c5.24 9.95 6 16.11-1.68 25.7c-8 10-52 67.44-52 67.44c-2.62 2.98-7.23 3.7-11.09 3.7z"
                                    fill="currentColor"></path>
                                <circle cx="257" cy="69.56" r="37.04" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="16" fill="currentColor"></circle>
                            </svg>
                        </n-icon>
                    </div>
                </div>
                <div>
                    <div v-if="!light">
                        <div style="height: 149px">
                            <div>
                                <b>{{ "遵纪守法 不闯红灯" }}</b>
                            </div>
                            <n-progress style="width: 100%" type="line" :percentage="100" :height="24"
                                :border-radius="4" :fill-border-radius="0" color="#d30000"
                                :show-indicator="false"></n-progress>
                            <div style="font-size: 64px"><b>等待中</b></div>
                        </div>
                    </div>
                    <div v-else>
                        <div style="height: 149px">
                            <div>
                                <b>{{ `${distance} m` }}</b>
                            </div>
                            <n-progress style="width: 100%" type="line" :percentage="percentage" :height="24"
                                :border-radius="4" :fill-border-radius="0" :color="themeVars.successColor"
                                :show-indicator="false"
                                :rail-color="changeColor(themeVars.successColor, { alpha: 0.2 })"></n-progress>
                            <transition mode="out-in">
                                <div v-if="distance" style="font-size: 64px"><b>请通行</b></div>
                                <div v-else style="font-size: 64px"><b>无法通过</b></div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </n-flex>
    </div>
</template>

<style lang='less' scoped>
@font-face {
    font-family: "Digital7";
    src: url('E1234.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.container {
    padding: 48px 24px;

    .trafficLight__contianer {
        text-align: center;
        height: calc(100vh - 52px - 48px - 48px);
    }

    .iconContainer {
        width: 32px;
        height: 32px;
        border: 2px solid black;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .countdown {
        position: absolute;
        top: 48px;
        left: calc(50% - 52px);
        font-size: 82px;
        font-family: "Digital7";
        letter-spacing: -24px;
    }

    .icons {
        position: absolute;
        bottom: 32px;
        left: calc(50% - 46px);
    }

    .red-glowing-text {
        text-shadow:
            0 0 5px #ff0000,
            0 0 10px #ff0000,
            0 0 20px #ff0000,
            0 0 40px #ff0000,
            0 0 80px #ff0000,
            0 0 90px #ff0000,
            0 0 100px #ff0000;
    }

    .green-glowing-text {
        text-shadow:
            0 0 5px #04ff00,
            0 0 10px #04ff00,
            0 0 20px #04ff00,
            0 0 40px #04ff00,
            0 0 80px #04ff00,
            0 0 90px #04ff00,
            0 0 100px #04ff00;
    }

    .standingIcon {
        filter:
            drop-shadow(0 0 5px #ff0000a1) drop-shadow(0 0 10px #ff0000a1) drop-shadow(0 0 20px #ff0000a1) drop-shadow(0 0 40px #ff0000a1)
    }

    .walkingIcon {
        filter:
            drop-shadow(0 0 5px #04ff00) drop-shadow(0 0 10px #04ff00) drop-shadow(0 0 20px #04ff00) drop-shadow(0 0 40px #04ff00);
        animation: blink 1s infinite;
    }
}
</style>