<script setup>
import { ref, watch, computed } from 'vue'
import axios from "axios";
import { useThemeVars } from "naive-ui";
import { changeColor } from 'seemly'

const themeVars = useThemeVars();

const light = ref(false);

const lightColor = ref("#ff0000")

const percentage = ref(100);

const currentTime = ref(0) // 默认绿灯 30s，红灯 85s

const progressInterval = ref(null);

const distance = ref(1);

const distanceToCrosswalk = ref(0);

const timePin = ref([])

watch(currentTime, newVal => {
    if (newVal <= 0) {
        percentage.value = 100; // 最终进度条为 100%
        clearInterval(progressInterval.value); // 停止定时器
        correctTime();
    }
})

watch(light, newVal => {
    if (newVal) {
        lightColor.value = "#04ff00";
    } else {
        lightColor.value = "#ff0000";
    }
})

initial();

async function initial() {
    timePin.value = await readJSON();
    correctTime();
}

// 找到距离当前时间最近的记录
function findClosestRecord(parsedData, currentTimestamp) {
    const currentMillis = currentTimestamp.getTime();

    // 筛选出所有未来的时间点
    const futureData = parsedData.filter(record => record.time >= currentMillis);

    // 如果有未来时间点，返回最近的那一个
    if (futureData.length > 0) {
        return futureData.reduce((prev, curr) =>
            Math.abs(curr.time - currentMillis) < Math.abs(prev.time - currentMillis) ? curr : prev
        );
    }

    // 如果没有未来时间点，选择最近的过去记录
    const pastData = parsedData.filter(record => record.time < currentMillis);
    if (pastData.length > 0) {
        return pastData.reduce((prev, curr) =>
            Math.abs(curr.time - currentMillis) < Math.abs(prev.time - currentMillis) ? curr : prev
        );
    }

    // 如果数据为空，返回 null
    return null;
}

async function correctTime() {
    const currentTimestamp = new Date(); // 获取当前时间戳

    // 将 JSON 数据中的时间转换为可比较的时间戳
    const parsedData = timePin.value.data.map(entry => ({
        time: new Date(`1970-01-01T${entry.time}Z`).getTime(), // 转为时间戳
        light: entry.light
    }));

    // 找到距离当前时间最近的记录
    const closestRecord = findClosestRecord(parsedData, currentTimestamp);

    // 当前时间与最近记录的时间差
    const timeDiff = Math.ceil((currentTimestamp.getTime() - closestRecord.time) / 1000);

    if (timeDiff >= 0) {
        // 推算当前灯的状态和剩余时间
        const cycleTime = closestRecord.light ? 35 + 85 : 85 + 35; // 一个完整周期的总时间
        const timeInCycle = timeDiff % cycleTime;

        if (closestRecord.light) {
            // 最近记录是绿灯
            if (timeInCycle < 35) {
                currentTime.value = 35 - timeInCycle; // 还剩余的绿灯时间
                light.value = true;
            } else {
                currentTime.value = 85 - (timeInCycle - 35); // 红灯倒计时
                light.value = false;
            }
        } else {
            // 最近记录是红灯
            if (timeInCycle < 85) {
                currentTime.value = 85 - timeInCycle; // 还剩余的红灯时间
                light.value = false;
            } else {
                currentTime.value = 35 - (timeInCycle - 85); // 绿灯倒计时
                light.value = true;
            }
        }
    } else {
        // 当前时间在记录之前，直接使用最近记录的灯状态和剩余时间
        currentTime.value = Math.abs(timeDiff);
        light.value = closestRecord.light;
    }

    console.log(`校准完成: ${light.value ? '绿灯' : '红灯'}，剩余时间: ${currentTime.value}秒`);
    handleProgress();
}

function handleProgress() {
    if (progressInterval.value) {
        clearInterval(progressInterval.value); // 确保没有残留的定时器
    }
    calculateDistanceAndPercentage();
    progressInterval.value = setInterval(() => {
        // 倒计时递减
        currentTime.value -= 1;
        calculateDistanceAndPercentage();
    }, 1000); // 每 1 秒更新一次
}

function calculateDistanceAndPercentage() {
    const walkingSpeed = 1.4; // 平均步行速度，单位：米/秒
    const crosswalkLength = 20; // 人行横道长度，单位：米

    // 计算当前能行走的最大距离
    const maxWalkingDistance = currentTime.value * walkingSpeed;
    if (maxWalkingDistance >= distanceToCrosswalk.value) {
        const remainingDistanceOnCrosswalk = maxWalkingDistance - distanceToCrosswalk.value;
        if (remainingDistanceOnCrosswalk >= crosswalkLength) {
            const safeDistance = maxWalkingDistance - crosswalkLength;
            distance.value = safeDistance; // 保留一位小数
            percentage.value = ((safeDistance / maxWalkingDistance) * 100);
        } else {
            distance.value = 0; // 无法到达
            percentage.value = 0; // 进度条为 0%
        }
    } else {
        distance.value = 0; // 无法到达人行横道起点
        percentage.value = 0;
    }
}

function readJSON() {
    return axios('my-website/GreenLightGo/app/light.json')
}
</script>

<template>
    <div>
        <div class="container">
            <n-flex :align="'center'">
                <div class="iconContainer">
                    <n-icon color="#0068EF" :size="24">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 32 32">
                            <defs></defs>
                            <path
                                d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z"
                                fill="currentColor"></path>
                            <circle id="_Inner-Path_" cx="16" cy="13" r="4" fill="none"></circle>
                        </svg>
                    </n-icon>
                </div>
                <div>
                    <div style="font-size: 18px"><b>Xiamen</b></div>
                    <div>
                        思明北路与湖滨西路汇集路口红绿灯
                    </div>
                </div>
            </n-flex>
            <n-flex class="trafficLight__container" :align="'center'" :justify="'center'">
                <div>
                    <div style="position: relative; margin-bottom: 12px">
                        <n-image preview-disabled width="280"
                            src="./my-website/GreenLightGo/app/traffic-light-pedestrian.png"></n-image>
                        <div :class="['countdown', !light ? 'red-glowing-text' : 'green-glowing-text']"
                            :style="{ color: lightColor }">
                            {{ `${String(currentTime).padStart(2, "0")}` }}
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
                            <n-icon v-else :color="lightColor" class="walkingIcon" :size="96">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M312.55 479.9l-56.42-114l-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="32" fill="currentColor"></path>
                                    <path d="M127.38 291.78v-74.07s37-74.07 74.07-74.07" fill="none"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="32"></path>
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
                            <div style="height: 149px;">
                                <!-- <div class="clickButton">
                                    戳我<br />催促
                                </div> -->
                                <div>
                                    <b>{{ "遵纪守法 不闯红灯" }}</b>
                                </div>
                                <n-progress style="width: 100%" type="line" :percentage="100" :height="24"
                                    :border-radius="4" :fill-border-radius="0" :color="'#d30000'" :circle-gap="0.5"
                                    :rail-color="changeColor(themeVars.errorColor, { alpha: 0.2 })"
                                    :indicator-text-color="themeVars.errorColor" :show-indicator="false" />
                                <div class="tipText" style="font-size: 64px"><b>等待中</b></div>
                            </div>
                        </div>
                        <div v-else>
                            <n-flex style="width: 280px;" :align="'center'">
                                <div style="width: 100%">
                                    <div>
                                        <b>{{ `${distance.toFixed(1)} m` }}</b>
                                    </div>
                                    <n-progress style="width: 100%" type="line" :percentage="percentage" :height="24"
                                        :border-radius="4" :fill-border-radius="0" :color="themeVars.successColor"
                                        :circle-gap="0.5"
                                        :rail-color="changeColor(themeVars.successColor, { alpha: 0.2 })"
                                        :indicator-text-color="themeVars.successColor" :show-indicator="false" />
                                    <transition mode="out-in">
                                        <div v-if="distance" style="font-size: 64px"><b>请通行</b></div>
                                        <div v-else style="font-size: 64px"><b>无法通过</b></div>
                                    </transition>
                                    <!-- <n-qr-code id="qr-code"
                                        value="https://oscarlin7.github.io/my-website/#/application" /> -->
                                </div>
                            </n-flex>
                        </div>
                    </div>
                </div>
            </n-flex>
        </div>
    </div>
</template>

<style lang='less' scoped>
@font-face {
    font-family: 'Digital7';
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

    .iconContainer {
        width: 32px;
        height: 32px;
        padding: 8px;
        border-radius: 8px;
        border: 2px solid #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .trafficLight__container {
        text-align: center;
        height: calc(100vh - 52px - 48px - 48px);

        .countdown {
            position: absolute;
            top: 48px;
            left: calc(50% - 52px);
            font-size: 82px;
            font-family: "Digital7";
            letter-spacing: -24px;
            -webkit-text-size-adjust: 100% !important;
            text-size-adjust: 100% !important;
            -moz-text-size-adjust: 100% !important;
        }

        .icons {
            position: absolute;
            bottom: 32px;
            left: calc(50% - 46px);
        }

        .walkingIcon {
            font-size: 50px;
            -webkit-text-size-adjust: 100% !important;
            text-size-adjust: 100% !important;
            -moz-text-size-adjust: 100% !important;
            animation: blink 1s infinite;
        }

        // .clickButton {
        //     border-radius: 50%;
        //     height: 256px;
        //     padding: 8px 16px 16px 16px;
        //     font-size: 64px;
        //     line-height: 1;
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        //     cursor: pointer;

        //     background: linear-gradient(45deg, #ff6a00, #ff0000);
        //     border: none;
        //     border-radius: 50px;
        //     color: white;
        //     text-transform: uppercase;
        //     font-weight: bold;
        //     cursor: pointer;
        //     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        //     transition: all 0.3s ease;

        //     &:hover {
        //         background: linear-gradient(45deg, #ff0000, #ff6a00);
        //         transform: translateY(-4px);
        //         box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        //     }

        //     &:active {
        //         transform: translateY(2px);
        //         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        //     }
        // }
    }
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
    filter: drop-shadow(0 0 5px #ff0000a1) drop-shadow(0 0 10px #ff0000a1) drop-shadow(0 0 20px #ff0000a1) drop-shadow(0 0 40px #ff0000a1);
}

.walkingIcon {
    filter: drop-shadow(0 0 5px #00ff00) drop-shadow(0 0 10px #00ff00) drop-shadow(0 0 20px #00ff00) drop-shadow(0 0 40px #00ff00);
}

.tipText {
    font-size: 64px;
    -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
}
</style>