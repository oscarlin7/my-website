<script setup>
import { ref } from 'vue';
import router from '../../router/router';

const showModal = ref(false);
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div style="margin-top: -87px">
                <n-grid style="align-items: center;">
                    <n-gi :span="12">
                        <n-flex :justify="'center'">
                            <n-image :width="220" src="./my-website/GreenLightGo/home/app-home.png"
                                preview-disabled></n-image>
                        </n-flex>
                    </n-gi>
                    <n-gi :span="12">
                        <div>
                            <div class="slogan">Your ultimate tool for predicting traffic light timings.</div>
                            <div class="subtitle">With just a tap, you can know if you’ll make it through the next green
                                light, helping you save time and avoid frustration.</div>
                        </div>
                        <div>
                            <!-- <n-button type="primary" round class="startBtn" tag="a"
                                href="https://oscarlin7.github.io/my-website/#/application" target="_blank">
                                Start Here
                            </n-button> -->
                            <n-button type="primary" round class="startBtn" @click="showModal = true">
                                Start Here
                            </n-button>
                        </div>
                    </n-gi>
                </n-grid>
            </div>
        </n-flex>
        <n-modal v-model:show="showModal">
            <n-card style="width: 1200px; padding: 24px" :bordered="false" size="huge" role="dialog" aria-modal="true">
                <n-grid style="align-items: center;">
                    <n-gi :span="10" style="text-align: center;">
                        <div>
                            <n-qr-code :value="'https://oscarlin.hillcodex.com/#/application'" :size="180"></n-qr-code>
                        </div>
                        <div style="margin-top: 24px">
                            <n-text :depth="3">
                                Scan the QR code with your phone to open the app in your browser.
                            </n-text>
                        </div>
                    </n-gi>
                    <n-gi :span="4" style="text-align: center;">
                        <div>
                            <n-icon :size="56">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="48" d="M268 112l144 144l-144 144"></path>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="48" d="M392 256H100"></path>
                                </svg>
                            </n-icon>
                        </div>
                    </n-gi>
                    <n-gi :span="10" style="text-align: center;">
                        <div>
                            <n-image :src="'./my-website/GreenLightGo/mission/WechatIMG6.jpg'" height="240"></n-image>
                        </div>
                        <div style="margin-top: 24px">
                            <n-text :depth="3">
                                You can save this app to your phone’s home screen.
                            </n-text>
                        </div>
                    </n-gi>
                </n-grid>
            </n-card>
        </n-modal>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;
    padding: 24px;

    .n-image {
        border-radius: 3px;
    }

    .block1 {
        min-height: calc(100vh - 87px - 48px);

        .n-image {
            border: 2px solid black;
            box-shadow: var(--boxShadow-deep);
            border-radius: 20px;
        }

        .slogan {
            font-size: 36px;
            font-weight: bold;
            line-height: 1.4;
        }

        .subtitle {
            margin-top: 48px;
            margin-bottom: 24px;
            font-size: 18px;
        }

        .startBtn {
            margin-top: 12px;
        }
    }

    .block2 {
        min-height: 100vh;

        .n-grid {
            align-items: center;
        }
    }

    .block3 {
        min-height: 100vh;
    }
}
</style>